import type { IUserStatus } from '@didomi/react'

import { hasIntersection } from '../../utils/array'

import type { VendorConsentStatus } from './types'

const buildDefaultVendorStatus = (vendors: object):Record<string, VendorConsentStatus> => (
    Object.values(vendors)
        .reduce((acc, vendorId) => ({
            ...acc,
            [vendorId]: {
                didUserApprove: undefined,
                id: vendorId,
                name: undefined,
                purposeIds: undefined
            }
        }), {})
)

const shouldRemoveCookies = (params: {
    prevUserStatus?: IUserStatus
    userStatus: IUserStatus
}) => {
    const aVendorHasBeenDisabled = hasIntersection(
        params?.prevUserStatus?.vendors?.consent?.enabled || [],
        params?.userStatus?.vendors?.consent?.disabled
    )
    const aPurposeHasBeenDisabled = hasIntersection(
        params?.prevUserStatus?.purposes?.consent?.enabled || [],
        params?.userStatus?.purposes?.consent?.disabled
    )
    return aVendorHasBeenDisabled || aPurposeHasBeenDisabled
}

export {
    buildDefaultVendorStatus,
    shouldRemoveCookies
}
