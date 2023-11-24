import type {
    FC,
    PropsWithChildren
} from 'react'

import type {
    Purposes,
    Vendors,
    VendorConsentStatus
} from '../../components/CMP'

import defaultI18n from '../../utils/i18n.json'

type ContextType = {
    isReady: boolean,
    vendors: { [k in Vendors]: boolean | undefined }
    purposes: { [k in Purposes]: boolean | undefined }
    shouldRemoveCookies: boolean
    status: Record<string, VendorConsentStatus>
    approveVendorConsent(params: { vendor: Vendors, purposes: string[] }): void,
    i18n: typeof defaultI18n,
    _setUserConsent: (value: any) => void
}

type ProviderType = FC<PropsWithChildren<{
    i18n?: typeof defaultI18n
}>>

export type {
    ContextType,
    ProviderType
}
