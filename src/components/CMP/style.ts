import { themeHelpers, Polished } from '@gotamedia/fluffy'
import {
    css,
    createGlobalStyle,
} from 'styled-components'

const scrollMoreStyle = css`
    background: linear-gradient(#ffffff 33%, rgba(255,255,255, 0)),
        linear-gradient(rgba(255,255,255, 0), #ffffff 66%) 0 100%,
        radial-gradient(farthest-side at 50% 0, rgba(34,34,34, 0.5), rgba(0,0,0,0)),
        radial-gradient(farthest-side at 50% 100%, rgba(120,120,120, 0.5), rgba(0,0,0,0)) 0 100% !important;
    background-color: #ffffff !important;
    background-repeat: no-repeat !important;
    background-attachment: local, local, scroll, scroll !important;
    background-size: 100% 39px, 100% 39px, 100% 13px, 100% 13px !important;
`

const ConsentStyle = createGlobalStyle<{ fontFamily?: string }>`
    #didomi-host {
        * {
            &:not(a) {
                text-decoration: none !important;
            }
            
            -webkit-font-smoothing: auto !important;

            ${({ fontFamily }) => fontFamily && css`
                font-family: ${fontFamily};
            `}
        }

        *:focus {
            outline: none !important;
        }

        *button {
            *svg: {
                display: unset !important;
            }
        }

        .didomi {
            &-mobile {
                * {
                    h1,h2,h3,h4,p,span {
                        text-align: left !important;
                    }
                }
            }

            &-exterior {
                &-border {
                    border: none !important;

                    ${themeHelpers.isSmallDevice(css`
                        width: 100% !important;
                    `)}
                }
            }

            &-popup {
                &-backdrop {
                    background-color: hsla(0,0%,10%,.8) !important;
                }

                &-header {
                    padding: 0px !important;
                    font-weight: 700 !important;
                    font-size: 20px !important;
                    background-color: unset !important;
                }

                &-container {
                    width: unset !important;
                    margin: 16px !important;
                    border: none !important;
                    padding: 25px 30px !important;

                    ${themeHelpers.isSmallDevice(css`
                        margin: 0 !important;
                        padding: 15px !important;
                    `)}
                }

                &-notice {
                    padding: 35px !important;

                    &-logo {
                        margin-bottom: 15px !important;

                        &-container {
                            text-align: unset !important;
                        }
                    }

                    &-text {
                        &-container {
                            max-height: 625px !important;
                            overflow: auto !important;
                            ${scrollMoreStyle};

                            ${themeHelpers.isSmallDevice(css`
                                max-height: 400px !important;
                            `)}
                        }

                        h4 {
                            margin-bottom: 0 !important;

                            &:last-child {
                                margin-top: 18px;
                            }
                        }

                        ul {
                            padding: 0 !important;
                            margin-bottom: 0 !important;
                        }

                        li {
                            list-style: disc !important;
                            margin-bottom: 8px !important;
                        }

                        p {
                            margin-bottom: 12px !important;
                        }
                    }

                    &-buttons {
                        justify-content: space-between !important;

                        ${themeHelpers.isSmallDevice(css`
                            flex-direction: column-reverse;
                        `)}
                    }
                }
            }

            &-consent {
                &-popup {
                    &__dialog {
                        padding: 35px !important;
                    }

                    &-header {
                        &-close {
                            opacity: 1 !important;
                            font-size: 40px !important;
                        }
                    }

                    &-preferences {
                        button {
                            &.didomi-components-button {
                                &.didomi-button {
                                    ${themeHelpers.isSmallDevice(css`
                                        width: unset !important;
                                    `)}
                                }
                            }
                        }

                        &-purposes {
                            &-features {
                                display: none !important;
                            }
                        }
                    }

                    &-vendor {
                        ${themeHelpers.isMediumDevice(css`
                            flex-direction: row !important;
                            align-items: center !important;
                        `)}
                        
                        &__name {
                            > span {
                                &:last-child {
                                    margin-left: 5px !important;
                                }
                            }
                        }

                        &__buttons {
                            ${themeHelpers.isSmallDevice(css`
                                width: 100% !important;
                            `)}
                        }

                        &__right {
                            &_aligned {
                                &_buttons {
                                    ${themeHelpers.isMediumDevice(css`
                                        display: block !important;
                                        float: right !important;
                                        margin-top: -2px !important;
                                    `)}
                                }
                            }
                        }
                    }

                    &-data {
                        &-processing {
                            margin-bottom: 0 !important;

                            .label-button-section {
                                display: flex !important;
                            }

                            ${themeHelpers.isMediumDevice(css`
                                flex-direction: row !important;

                                .label-button-section {
                                    width: unset !important;
                                }
                            `)}

                            &__purpose {
                                &_actions {
                                    ${themeHelpers.isSmallDevice(css`
                                        .didomi-components-radio {
                                            button {
                                                svg {
                                                    display: none !important;
                                                }
                                            }
                                        }
                                    `)}
                                    
                                    &_title {
                                        min-width: 50px !important;

                                        ${themeHelpers.isSmallDevice(css`
                                            margin-right: 0 !important;
                                        `)}
                                    }
                                }
                            }

                            &__essential {
                                &_purpose {
                                    justify-content: right !important;
                                    color: black !important;
                                    font-size: 16px !important;
                                    font-weight: 400 !important;
                                    line-height: 24px !important;
                                    letter-spacing: 0px !important;
                                    text-align: center !important;
                                    text-transform: none !important;

                                    ${themeHelpers.isSmallDevice(css`
                                        flex: 1 !important;
                                    `)}

                                    ${themeHelpers.isMediumDevice(css`
                                        flex: 1 !important;
                                        width: 100px !important;
                                    `)}
                                }
                            }

                            &__buttons {
                                flex-shrink: unset !important;
                                
                                ${themeHelpers.isSmallDevice(css`
                                    margin: 0 !important;
                                    width: 100% !important;

                                    button {
                                        width: 100% !important;
                                    }
                                `)}
                            }
                        }
                    }

                    &-purpose {
                        &__buttons {
                            margin-left: auto !important;
                            margin-right: 15px !important;

                            ${themeHelpers.isSmallDevice(css`
                                width: 100% !important;
                            `)}
                        }
                    }
                    
                    &-body {
                        padding: 26px 0 0 0 !important;

                        ${themeHelpers.isSmallDevice(css`
                            padding: 15px 0 0 0 !important;
                        `)}

                        &__title {
                            display: none !important;
                        }
                        
                        &__explanation {
                            margin: 0 0 16px 0 !important;
                        }

                        &_vendors {
                            &-list {
                                padding: 12px 10px !important;
                                height: unset !important;
                                max-height: 350px !important;
                                ${scrollMoreStyle};
                            }
                        }
                    }

                    &-categories {
                        overflow: auto !important;
                        max-height: 350px !important;
                        border: 1px solid #C4C4C4 !important;
                        ${scrollMoreStyle};

                        ${themeHelpers.isSmallDevice(css`
                            max-height: 300px !important;
                        `)}

                        > div {
                            padding: 12px 16px !important;
                            border-bottom: 1px solid #C4C4C4 !important;

                            &:last-of-type {
                                border-color: #C4C4C4 !important;
                                border-bottom: none !important;
                            }

                            ${themeHelpers.isSmallDevice(css`
                                padding: 8px !important;
                            `)}
                        }

                        ${themeHelpers.isSmallDevice(css`
                            margin-top: 0px !important;
                        `)}

                        .didomi-consent-popup-category {
                            .didomi-consent-popup-categories {
                                border: 0 !important;
                                
                                > div {
                                    padding: 0px 0 12px 0 !important;
                                }
                            }
                        }
                    }

                    &-container {
                        &-click {
                            &-all {
                                ${themeHelpers.isSmallDevice(css`
                                    display: none !important;
                                `)}

                                margin-top: 20px !important;

                                .didomi-consent-popup-purpose__buttons {
                                    .didomi-components-radio {
                                        .didomi-components-radio__option__reporting#didomi-radio-option {
                                            &-agree-to-all {
                                                font-size: 16px !important;
                                            }

                                            &-disagree-to-all {
                                                font-size: 16px !important;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    &-view {
                        &-vendors {
                            &-list {
                                &-link {
                                    border: 1px solid #55565A !important;
                                    border-radius: 2px !important;
                                    height: 32px !important;
                                    padding: 0 16px !important;
                                    background-color: #fff !important;
                                    box-shadow: none !important;
                                    color: #55565A !important;
                                    font-size: 14px !important;
                                    font-weight: 400 !important;
                                    transition: none !important;

                                    &:hover {
                                        background-color: #eaeaea !important;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            &-notice {
                &-view {
                    &-partners {
                        &-link {
                            display: none !important;
                        }
                    }
                }

                &-banner {
                    margin: 10px;
                    box-shadow: 7px 10px 28px -12px rgba(0,0,0,0.75);
                }
            }

            &-buttons {
                box-shadow: none;
            }

            &-button {
                ${themeHelpers.isSmallDevice(css`
                    width: 100% !important;
                `)}

                height: 48px !important;
                border-radius: 2px !important;
                font-size: 13px !important;
                line-height: 16px !important;
                border: 1px solid ${({ theme }) => theme.colors.brand} !important;

                &-standard {
                    margin-right: 0 !important;
                    color: ${({ theme }) => theme.colors.brand} !important;
                    background-color: white !important;

                    &:not(:disabled) {
                        &:hover {
                            background-color: ${({ theme }) => Polished.tint(0.88, theme.colors.brand)} !important;
                        }
                    }
                }

                &-highlight {
                    margin-left: 24px !important;
                    margin-right: 0 !important;
                    color: white !important;
                    background-color: ${({ theme }) => theme.colors.brand} !important;

                    &:not(:disabled) {
                        &:hover {
                            color: white;
                            background-color: ${({ theme }) => Polished.shade(0.08, theme.colors.brand)} !important;
                        }
                    }
                }
            }

            &-components {
                &-button {
                    font-size: 16px !important;
                    font-weight: 400 !important;
                }

                &-accordion {
                    ${themeHelpers.isMediumDevice(css`
                        width: unset !important;
                    `)}
                    
                    &-label {
                        &-container {
                            ${themeHelpers.isMediumDevice(css`
                                display: flex !important;
                                flex-direction: row !important;
                                justify-content: space-between !important;
                                align-items: center !important;
                            `)}

                            .label-click {
                                > span {
                                    &:last-child {
                                        margin-left: 10px !important;
                                    }
                                }

                                &[aria-expanded='true']{
                                    .trigger-icon {
                                        ::before {
                                            transform: rotate(-135deg);
                                            top: 9px;
                                        }
                                    }
                                }
                            }

                            .trigger-icon {
                                width: 0;
                                color: white;
                                position: relative;

                                ::before {
                                    content: '';
                                    display: inline-block;
                                    border-bottom: 2px solid black;
                                    border-right: 2px solid black;
                                    height: 7px;
                                    width: 7px;
                                    transform: rotate(45deg);
                                    position: absolute;
                                    top: 5px;
                                }
                            }
                        }
                    }
                }

                &-radio {
                    &__option {
                        width: 130px !important;
                        border-radius: 3px !important;
                        background-color: #e9e9e8 !important;
                        width: 120px;
                        color: black !important;
                        border: 0 !important;
                        font-size: 16px !important;
                        height: 36px !important;
                        padding: 0 !important;
                        font-weight: 400 !important;

                        &:not(:disabled) {
                            &:hover {
                                background-color: #dedede !important;
                            }
                        }

                        &--selected {
                            &:not(:disabled) {
                                &:hover {
                                    background-color: #757575 !important;
                                }
                            }
                        }

                        &:first-child {
                            margin-right: 20px !important;
                        }

                        ${themeHelpers.isSmallDevice(css`
                            width: 100% !important;
                        `)}
    
                        &--agree {
                            color: white !important;
                            background-color: #55565A !important;
                            border: 0 !important;
    
                            svg {
                                width: 18px !important;
                                height: 18px !important;
                            }
                        }
    
                        &--disagree {
                            color: white !important;
                            background-color: #55565A !important;
                            border: 0 !important;
    
                            svg {
                                width: 12px !important;
                                height: 12px !important;
                            }
                        }

                        &__reporting {
                            font-size: 16px !important;
                        }
                    }
                }
            }
        }
    }
`

export { ConsentStyle }
