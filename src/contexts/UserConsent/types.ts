import type {
    FC,
    PropsWithChildren
} from 'react'

import type {
    Purposes,
    Vendors,
    VendorConsentStatus
} from '../../components/CMP'

type ContextType = {
    isReady: boolean,
    vendors: { [k in Vendors]: boolean | undefined }
    purposes: { [k in Purposes]: boolean | undefined }
    shouldRemoveCookies: boolean
    status: Record<string, VendorConsentStatus>
    approveVendorConsent(params: { vendor: Vendors, purposes: string[] }): void,
    _setUserConsent: (value: any) => void
}

type ProviderType = FC<PropsWithChildren>

export type {
    ContextType,
    ProviderType
}
