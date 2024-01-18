import 'styled-components'
import type { IDidomiObject } from '@didomi/react'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            brand: string
        }
        fonts: {
            generic: any
        }
    }
}

declare global {
    interface Window {
        Didomi: IDidomiObject
        didomiState: {
            didomiExperimentId: string
            didomiExperimentUserGroup: string
            didomiGDPRApplies: string
            didomiIABConsent: string
            didomiPurposesConsent: string
            didomiPurposesConsentDenied: string
            didomiPurposesConsentUnknown: string
            didomiVendorsConsent: string
            didomiVendorsConsentDenied: string
            didomiVendorsConsentUnknown: string
            didomiVendorsRawConsent: string
            didomiVendorsRawConsentDenied: string
            didomiVendorsRawConsentUnknown: string
        }
    }
}

export { }
