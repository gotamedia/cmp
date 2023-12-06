import type { IDidomiConfig } from '@didomi/react'
import type { FC, PropsWithChildren } from 'react'

import type { Vendors, Purposes, VendorConsentStatus } from '@components/CMP'

import type defaultI18n from '../../utils/i18n.json'

type ContextType = {
    isReady: boolean
    vendors: { [k in Vendors]: boolean | undefined }
    purposes: { [k in Purposes]: boolean | undefined }
    shouldRemoveCookies: boolean
    didUserConsent: boolean
    status: Record<string, VendorConsentStatus>
    approveVendorConsent(params: { vendor: Vendors | Vendors[], purposes: string[] }): void
    i18n: typeof defaultI18n
    config: IDidomiConfig
}

type ProviderType = FC<PropsWithChildren<{
    i18n?: typeof defaultI18n
    config?: IDidomiConfig
    cleanUpCookies?: boolean
    cookiesToKeep?: string[]
}>>

export type {
    ContextType,
    ProviderType,
}
