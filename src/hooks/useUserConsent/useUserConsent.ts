import useCMP from '@hooks/useCMP'

import hasConsent from '@utils/hasConsent'

import type * as Types from './types'

const useUserConsent: Types.UseUserConsent = (items) => {
    const {
        vendors,
        purposes,
    } = useCMP()

    return hasConsent(items, { vendors, purposes })
}

export default useUserConsent
