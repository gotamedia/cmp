import {
    useCallback,
    useMemo
} from 'react'

import useUserConsentContext from '../../hooks/useUserConsentContext'

import type * as Types from './types'

const useCMPR: Types.UseCMPR = (vendor) => {
    const {
        i18n: {
            restriction: {
                headline,
                subheadline,
                approveButton,
                cookieSettingButton
            }
        },
        status,
        approveVendorConsent
    } = useUserConsentContext()

    const vendorStatus = vendor && status[vendor]

    const approveVendor = useCallback(() => {
        if (!vendorStatus) return
        if (!vendorStatus.id) return
        if (!vendorStatus.purposeIds?.length) return

        approveVendorConsent({ vendor: vendorStatus.id, purposes: vendorStatus.purposeIds })
    }, [approveVendorConsent, vendorStatus])

    const openCookiesSettings = useCallback(() => {
        window.Didomi.notice.show()
    }, [])

    const results = useMemo(() => {
        return ({
            i18n: {
                headline,
                description: subheadline.replace('{VENDOR}', (vendorStatus?.name || '')),
                approveButton,
                cookieSettingButton
            },
            didUserApprove: vendorStatus?.didUserApprove,
            approveVendor: approveVendor,
            openCookiesSettings: openCookiesSettings
        })
    }, [
        headline,
        approveButton,
        cookieSettingButton,
        subheadline,
        vendorStatus?.name,
        vendorStatus?.didUserApprove,
        approveVendor,
        openCookiesSettings
    ])

    return results
}

export default useCMPR