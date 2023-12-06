import { forwardRef } from 'react'

import useCMPR from '@hooks/useCMPR'

import * as Styled from './style'
import type * as Types from './types'

const CMPR: Types.CMPRType = forwardRef((props, ref) => {
    const {
        children,
        vendor,
        ...filteredProps
    } = props

    const {
        i18n,
        config,
        didUserApprove,
        approveVendor,
        openCookiesSettings,
    } = useCMPR(vendor)

    if (didUserApprove === undefined) {
        return null
    }

    if (didUserApprove && children) {
        return children
    }

    const fontFamily = config?.theme?.font

    return (
        <Styled.Wrapper
            ref={ref}
            fontFamily={fontFamily}
            {...filteredProps}
        >
            <Styled.InnerWrapper>
                <Styled.Headline>
                    {i18n.headline}
                </Styled.Headline>

                <Styled.Description>
                    {i18n.description}
                </Styled.Description>

                <Styled.Content>
                    <Styled.ConsentButton onClick={approveVendor}>
                        {i18n.approveButton}
                    </Styled.ConsentButton>

                    <Styled.CookiesSettingButton onClick={openCookiesSettings}>
                        {i18n.cookieSettingButton}
                    </Styled.CookiesSettingButton>
                </Styled.Content>
            </Styled.InnerWrapper>
        </Styled.Wrapper>
    )
})

export default CMPR
