import {
    useState,
    useMemo,
    useCallback
} from 'react'
import styled from 'styled-components'
import Button from '@gotamedia/fluffy/Button'
import Textarea from '@gotamedia/fluffy/Textarea'
import { ThemeProvider } from '@gotamedia/fluffy/ThemeContext'
import { StoryFn } from '@storybook/react'

import Provider from './contexts/UserConsent'
import CMPRComponent from './components/CMPR'
import { CMPRProps } from './components/CMPR/types'
import CMPComponent, {
    DEFAULT_CONSENT_CONFIG,
    Vendors
} from './components/CMP'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const StyledButton = styled(Button)`
    width: 300px;
    margin: 15px auto;
`

const EmbedText = styled.p`
    margin: 10px auto;
`

const StyledTextarea = styled(Textarea)`
    width: 600px;
    height: 300px;
`

const Template = ({ brandColor, children, ...filteredProps }: any) => {
    const theme = {
        colors: {
            brand: brandColor
        },
        fonts: {
            generic: []
        }
    }

    const handleOnShowNoticeClick = useCallback(() => {
        window?.Didomi?.notice?.show?.()
    }, [])

    const handleOnShowPurposesClick = useCallback(() => {
        window?.Didomi?.preferences?.show?.()
    }, [])

    const handleOnShowVendorsClick = useCallback(() => {
        // @ts-ignore
        window?.Didomi?.preferences?.show?.('vendors')
    }, [])

    const handleOnReset = useCallback(() => {
        window?.Didomi?.reset?.()
        window.location.reload()
    }, [])

    return (
        <Provider>
            <ThemeProvider theme={theme}>
                <Wrapper>
                    <StyledButton onClick={handleOnShowNoticeClick}>
                        {'Show Notice'}
                    </StyledButton>

                    <StyledButton onClick={handleOnShowPurposesClick}>
                        {'Show Purposes'}
                    </StyledButton>

                    <StyledButton onClick={handleOnShowVendorsClick}>
                        {'Show Vendors'}
                    </StyledButton>

                    <StyledButton onClick={handleOnReset}>
                        {'Reset'}
                    </StyledButton>

                    <CMPComponent
                        key={[
                            brandColor,
                            JSON.stringify(filteredProps.config),
                            filteredProps.apiKey,
                            filteredProps.noticeId,
                            filteredProps.iabVersion,
                            filteredProps.sdkPath,
                        ].join('-')}
                        {...filteredProps}
                    />

                    {children}
                </Wrapper>
            </ThemeProvider>
        </Provider>
    )
}

export const CMP = (props: any) => {
    return (
        <>
            <Template {...props} />
        </>
    )
}

export const PreviewCMP = ({ config, brandColor, ...filteredProps}: any) => {
    const [showConsent, setShowConsent] = useState(false)
    const [noticeContent, setNoticeContent] = useState(DEFAULT_CONSENT_CONFIG.notice.content.popup.sv)

    const _config = useMemo(() => {
        return {
            ...config,
            notice: {
                ...config.notice,
                content: {
                    ...config.notice.content,
                    popup: {
                        sv: noticeContent
                    }
                }
            }
        }
    }, [config, noticeContent])

    const handleShowConsent = useCallback(() => {
        setShowConsent(true)
        window?.Didomi?.notice?.show?.()
    }, [])

    const handleOnReset = useCallback(() => {
        window?.Didomi?.reset?.()
        window.location.reload()
    }, [])

    const theme = {
        colors: {
            brand: brandColor
        },
        fonts: {
            generic: []
        }
    }

    return (
        <Provider>
            <ThemeProvider theme={theme}>
                <Wrapper>
                    <StyledTextarea
                        value={noticeContent}
                        onValueChange={setNoticeContent}
                    />

                    <StyledButton onClick={handleShowConsent}>
                        {'Show Notice'}
                    </StyledButton>

                    <StyledButton onClick={handleOnReset}>
                        {'Reset'}
                    </StyledButton>

                    {
                        showConsent ? (
                            <CMPComponent
                                {...filteredProps}
                                config={_config}
                            />
                        ) : (
                            null
                        )
                    }

                </Wrapper>
            </ThemeProvider>
        </Provider>
    )
}

export const CMPR: StoryFn<CMPRProps> = ({ vendor, ...filteredProps }: any) => {
    return (
        <>
            <Template {...filteredProps}>
                <CMPRComponent vendor={vendor}>
                    <Wrapper>
                        <EmbedText> {'<--- Embeds content --->'} </EmbedText>
                        <EmbedText> {'<--- Embeds content --->'} </EmbedText>
                        <EmbedText> {'<--- Embeds content --->'} </EmbedText>
                        <EmbedText> {'<--- Embeds content --->'} </EmbedText>
                    </Wrapper>
                </CMPRComponent>
            </Template>
        </>
    )
}

CMPR.args = {
    vendor: Vendors.Facebook
}

CMPR.argTypes = {
    vendor: {
        options: Object.keys(Vendors).map(i => Number(i) ? null : i).filter(Boolean ),
        mapping: Vendors,
        control: { type: 'select' }
    }
}

export default {
    title: 'Docs/Components',
    component: CMP,
    args: {
        config: DEFAULT_CONSENT_CONFIG,
        apiKey: 'aac9f485-1439-4164-8cd7-e42a1e204304',
        noticeId: 'qyYUYP6e',
        sdkPath: 'https://sdk.privacy-center.org/',
        iabVersion: 2,
        brandColor: '#005CA9'
    },
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        brandColor: { control: 'color' }
    }
}