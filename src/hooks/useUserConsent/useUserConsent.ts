import {
    Vendors,
    Purposes
} from '../../components/CMP'

import useUserConsentContext from '../useUserConsentContext/useUserConsentContext'

import type * as Types from './types'

const useUserConsent: Types.UseUserConsent = (items) => {
    const userConsent = useUserConsentContext()

    if (Array.isArray(items) && items.length) {
        const consents: { [k in (Vendors | Purposes)]: boolean | undefined } = {} as any

        items.forEach((item) => {
            if (Object.values(Vendors).includes(item as Vendors)) {
                // @ts-ignore
                consents[item] = userConsent.vendors[item]
            }

            if (Object.values(Purposes).includes(item as Purposes)) {
                if (item === Purposes.NecessaryCookies) {
                    consents[item] = true
                } else {
                    // @ts-ignore
                    consents[item] = userConsent.purposes[item]
                }
            }
        })

        return consents
    }

    return {
        ...userConsent.vendors,
        ...userConsent.purposes
    }
}

export default useUserConsent
