import {
    useState,
    useEffect,
} from 'react'

import type { Vendors, Purposes } from '@components/CMP'

import useCMP from '@hooks/useCMP'
import useConsent from '@hooks/useConsent'

import type * as Types from './types'

const useCanUseVendor: Types.UseVendor = (vendor) => {
    const [consentsToCheck, setConsentsToCheck] = useState<(Vendors | Purposes)[]>()

    const consent = useConsent(consentsToCheck)
    const { isReady } = useCMP()

    useEffect(() => {
        if (isReady) {
            const purposes: Purposes[] = window.Didomi?.getVendorById(vendor)?.purposeIds

            if (purposes) {
                setConsentsToCheck([
                    vendor,
                    ...purposes,
                ])
            }
        }
    }, [isReady, vendor])

    return consentsToCheck ? consent : undefined
}

export default useCanUseVendor
