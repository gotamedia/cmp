import {
    useCallback,
    useMemo,
} from 'react'

import type { Purposes } from '@components/CMP'

import useUserConsentContext from '@hooks/useCMP'

import type * as Types from './types'

const useCMPR: Types.UseCMPR = (vendor) => {
    const {
        config,
        i18n: {
            restriction: {
                headline,
                subheadline,
                approveButton,
                cookieSettingButton,
            },
        },
        status,
        approveVendorConsent,
    } = useUserConsentContext()

    const vendors = Array.isArray(vendor) ? vendor : [vendor]
    const statuses = vendors.map(v => status[v])
    const didUserApprove = statuses.every(vendorStatus => vendorStatus.didUserApprove)

    const approveVendor = useCallback(() => {
        if (didUserApprove) return

        const vendorIds = statuses.map(s => s.id)

        const purposeIds = statuses
            .map(s => s?.purposeIds)
            .filter(Boolean)
            .reduce<Purposes[]>((prev, curr) => prev.concat(curr!!), [])

        if (!vendorIds) return
        if (!purposeIds) return

        approveVendorConsent({ vendor: vendorIds, purposes: purposeIds })
    }, [approveVendorConsent, didUserApprove, statuses])

    const openCookiesSettings = useCallback(() => {
        window?.Didomi?.notice?.show?.()
    }, [])

    const results = useMemo(() => {
        const names = statuses.map(s => s?.name).join(', ')

        return ({
            config: config,
            i18n: {
                headline,
                description: subheadline.replace('{VENDOR}', (names || '')),
                approveButton,
                cookieSettingButton,
            },
            didUserApprove,
            approveVendor: approveVendor,
            openCookiesSettings: openCookiesSettings,
        })
    }, [
        statuses,
        config,
        headline,
        subheadline,
        approveButton,
        cookieSettingButton,
        didUserApprove,
        approveVendor,
        openCookiesSettings,
    ])

    return results
}

export default useCMPR
