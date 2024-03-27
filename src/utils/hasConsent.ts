import { Vendors, Purposes } from '@components/CMP'

import getConsentStatus from './getConsentStatus'

const hasConsent = (items?: (Vendors | Purposes)[], consentStatus = getConsentStatus(window?.Didomi)) => {
    const {
        vendors,
        purposes,
    } = consentStatus

    if (Array.isArray(items) && items.length) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const consents: { [k in (Vendors | Purposes)]: boolean | undefined } = {} as any

        items.forEach((item) => {
            if (Object.values(Vendors).includes(item as Vendors)) {
            // @ts-expect-error
                consents[item] = vendors[item]
            }

            if (Object.values(Purposes).includes(item as Purposes)) {
                if (item === Purposes.NecessaryCookies) {
                    consents[item] = true
                }
                else {
                // @ts-expect-error
                    consents[item] = purposes[item]
                }
            }
        })

        return consents
    }

    return {
        ...vendors,
        ...purposes,
    }
}

export default hasConsent
