import {
    Button,
    ButtonVariants,
    ButtonVariantTypes,
} from '@gotamedia/fluffy'
import styled, { css } from 'styled-components'

const Wrapper = styled.div<{ fontFamily?: string }>`
    width: 100%;
    background: #F5F5F5;
    border: 1px solid;
    border-color: #dadad8;
    border-radius: 4px;
    display: inline-block;
    margin: 8px 0;

    ${({ fontFamily }) => fontFamily && css`
        font-family: ${fontFamily};
    `}
`

const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    margin: 0 auto;
    max-width: 80%;
    padding: 12px 0px;
`

const Headline = styled.h1`
    margin: auto 0;
    padding: 0;
    font-weight: 600;
    line-height: 16px;
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.generic[4]};
`

const Description = styled.p`
    margin: auto 0;
    padding: 0;
    line-height: 16px;
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.generic[5]};
`

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 12px;
    width: 100%;
`

const ConsentButton = styled(Button).attrs(() => {
    return {
        variant: ButtonVariants.OutlineTransparent,
    }
})`

`

const CookiesSettingButton = styled(Button).attrs(() => {
    return {
        variant: ButtonVariants.Text,
        variantType: ButtonVariantTypes.Link,
    }
})`
    height: unset;
    font-family: ${({ theme }) => theme.fonts.generic[5]};
`

export {
    Wrapper,
    InnerWrapper,
    Headline,
    Description,
    Content,
    ConsentButton,
    CookiesSettingButton,
}
