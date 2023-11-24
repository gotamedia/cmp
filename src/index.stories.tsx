import { useCallback } from 'react'
import styled from 'styled-components'
import Button from '@gotamedia/fluffy/Button'
import { ThemeProvider } from '@gotamedia/fluffy/ThemeContext'

import ConsentNotice, { DEFAULT_CONSENT_CONFIG } from './'

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

export const CMP = ({ brandColor, ...filteredProps }: any) => {
    const theme = {
        colors: {
            brand: brandColor
        }
    }

    const handleOnShowNoticeClick = useCallback(() => {
        window?.Didomi?.notice.show()
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
        <ThemeProvider theme={theme}>
            <Wrapper>
                <StyledButton onClick={handleOnShowNoticeClick}>
                    {'Show Consent Notice'}
                </StyledButton>

                <StyledButton onClick={handleOnShowPurposesClick}>
                    {'Show Preferences (Purposes)'}
                </StyledButton>

                <StyledButton onClick={handleOnShowVendorsClick}>
                    {'Show Preferences (Vendors)'}
                </StyledButton>

                <StyledButton onClick={handleOnReset}>
                    {'Reset'}
                </StyledButton>

                <ConsentNotice
                    key={brandColor}
                    {...filteredProps}
                />
            </Wrapper>
        </ThemeProvider>
    )
}

export default {
    title: 'CMP',
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