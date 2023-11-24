import styled from 'styled-components'
import {
    Button,
    ButtonVariants,
    ButtonVariantTypes
} from '@gotamedia/fluffy'

const Wrapper = styled.div`
    background: #F5F5F5;
    border: 1px solid;
    border-color: #dadad8;
    border-radius: 4px;
    width: 100%;
`

const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4px;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    padding-bottom: 4px;
    padding-top: 4px;
`

const Headline = styled.h1`
    line-height: 16px;
    font-size: 14px;
`

const Description = styled.p`
    line-height: 16px;
    font-size: 14px;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 4px;
    width: 100%;
`

const ConsentButton = styled(Button)`

`

const CookiesSettingButton = styled(Button).attrs(() => {
    return {
        variant: ButtonVariants.Text,
        variantType: ButtonVariantTypes.Link
    }
})`

`

export {
    Wrapper,
    InnerWrapper,
    Headline,
    Description,
    Content,
    ConsentButton,
    CookiesSettingButton
}