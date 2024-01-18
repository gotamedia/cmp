import { Vendors, Purposes } from '@components/CMP'

import useCMP from '@hooks/useCMP'

import type * as Types from './types'

const useUserConsent: Types.UseUserConsent = (items) => {
    const {
        vendors,
        purposes,
    } = useCMP()

    if (Array.isArray(items) && items.length) {
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

export default useUserConsent
