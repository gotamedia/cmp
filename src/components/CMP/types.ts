import type {
    IDidomiConfig,
    OnConsentChangedFunction,
    OnPreferencesClickPurposeFunction,
    OnPreferencesClickVendorFunction,
    IDidomiObject,
} from '@didomi/react'
import type {
    FC,
    ReactNode,
} from 'react'

import type { ContextType } from '@contexts/Consent'

import type {
    Purposes,
    Vendors,
} from './constants'
import type defaultI18n from '../../utils/i18n.json'

type CMPProps = {
    apiKey: string
    noticeId: string
    children: ReactNode
    disabled?: boolean
    i18n?: typeof defaultI18n
    config?: IDidomiConfig
    cleanUpCookies?: boolean
    cookiesToKeep?: string[]
    embedTCFStub?: boolean
    gdprAppliesGlobally?: boolean
    iabVersion?: number
    sdkPath?: string
    onReady?: (didomi: IDidomiObject, userConsent: ContextType) => void
    onConsentChanged?: OnConsentChangedFunction
    onNoticeShown?: () => void
    onNoticeHidden?: () => void
    onNoticeBackdropclick?: () => void
    onNoticeClickAgree?: () => void
    onNoticeClickMoreInfo?: () => void
    onPreferencesClickAgreeToAll?: () => void
    onPreferencesClickDisagreeToAll?: () => void
    onPreferencesClickPurposeAgree?: OnPreferencesClickPurposeFunction
    onPreferencesClickPurposeDisagree?: OnPreferencesClickPurposeFunction
    onPreferencesClickViewVendors?: () => void
    onPreferencesClickSaveChoices?: () => void
    onPreferencesClickVendorAgree?: OnPreferencesClickVendorFunction
    onPreferencesClickVendorDisagree?: OnPreferencesClickVendorFunction
    onPreferencesClickVendorSaveChoices?: () => void
}

type CMPType = FC<CMPProps>

interface VendorDidomi {
    cookieMaxAgeSeconds?: number
    deviceStorageDisclosureUrl?: string
    featureIds?: string | number[]
    flexiblePurposeIds?: string | number[]
    id: Vendors
    lang_urls?: string[]
    legIntPurposeIds?: string[]
    name?: string
    namespace?: string
    namespaces?: { iab2?: number }
    policyUrl?: string
    purposeIds?: Purposes[]
    specialFeatureIds?: string | number[]
    specialPurposeIds?: string | number[]
    usesNonCookieAccess?: boolean
}

interface VendorConsentStatus extends Pick<VendorDidomi, 'id' | 'name' | 'purposeIds'> {
    didUserApprove?: boolean
}

type HandleOnReady = (didomi: IDidomiObject, contextState: ContextType) => void

export type {
    CMPType,
    HandleOnReady,
    VendorDidomi,
    VendorConsentStatus,
}
