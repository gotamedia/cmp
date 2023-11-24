import useUserConsent from '../useUserConsent/useUserConsent'

import {
    every,
    some
} from '../../utils/array'

import type * as Types from './types'

const useConsent: Types.UseConsent = (items) => {
    const consents = useUserConsent(items)

    const isAllApproved = every(Object.values(consents), true)

    if (isAllApproved) {
        return true
    }

    const isAnyRejected = some(Object.values(consents), false)

    if (isAnyRejected) {
        return false
    }

    return undefined
}

export default useConsent
