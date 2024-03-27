import type { IDidomiObject } from '@didomi/react'

import type { Vendors, Purposes } from '@components/CMP/constants'

import type { ContextType } from '@contexts/Consent/types'

import {
    filterVendors,
    filterPurposes,
} from '@utils/filter'

type Consent = {
    vendors: ContextType['vendors']
    purposes: ContextType['purposes']
}

const getConsentStatus = (didomi: IDidomiObject) => {
    const consentStatus = {
        vendors: {},
        purposes: {},
    } as Consent

    if (didomi) {
        const userStatus = didomi.getUserStatus()

        const userConsentStatus = {
            vendorsEnabled: userStatus.vendors.consent.enabled.filter(filterVendors) as Vendors[],
            purposesEnabled: userStatus.purposes.consent.enabled.filter(filterPurposes) as Purposes[],
            vendorsDisabled: userStatus.vendors.consent.disabled.filter(filterVendors) as Vendors[],
            purposesDisabled: userStatus.purposes.consent.disabled.filter(filterPurposes) as Purposes[],
        }

        userConsentStatus.vendorsEnabled
            .forEach((vendor) => { consentStatus.vendors[vendor] = true })
        userConsentStatus.purposesEnabled
            .forEach((purpose) => { consentStatus.purposes[purpose] = true })
        userConsentStatus.vendorsDisabled
            .forEach((vendor) => { consentStatus.vendors[vendor] = false })
        userConsentStatus.purposesDisabled
            .forEach((purpose) => { consentStatus.purposes[purpose] = false })
    }

    return consentStatus
}

export default getConsentStatus
