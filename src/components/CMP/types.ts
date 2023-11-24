import type { FC } from 'react'
import {
    IDidomiConfig,
    OnReadyFunction,
    OnConsentChangedFunction,
    OnPreferencesClickPurposeFunction,
    OnPreferencesClickVendorFunction
} from '@didomi/react'

import i18n from '../../utils/i18n.json'

import type {
    Purposes,
    Vendors,
} from './constants'

type CMPProps = {
    i18n: typeof i18n,
    apiKey: string,
    noticeId: string,
    iabVersion?: number, 
    sdkPath?: string,
    config?: IDidomiConfig,
    onReady?: OnReadyFunction,
    onConsentChanged?: OnConsentChangedFunction,
    onNoticeShown?: () => void,
    onNoticeHidden?: () => void,
    onNoticeBackdropclick?: () => void,
    onNoticeClickAgree?: () => void,
    onNoticeClickMoreInfo?: () => void,
    onPreferencesClickAgreeToAll?: () => void,
    onPreferencesClickDisagreeToAll?: () => void,
    onPreferencesClickPurposeAgree?: OnPreferencesClickPurposeFunction,
    onPreferencesClickPurposeDisagree?: OnPreferencesClickPurposeFunction,
    onPreferencesClickViewVendors?: () => void,
    onPreferencesClickSaveChoices?: () => void,
    onPreferencesClickVendorAgree?: OnPreferencesClickVendorFunction,
    onPreferencesClickVendorDisagree?: OnPreferencesClickVendorFunction,
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

export type {
    CMPType,
    VendorDidomi,
    VendorConsentStatus
}