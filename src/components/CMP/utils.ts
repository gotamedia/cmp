import type { IUserStatus } from '@didomi/react'

import { hasIntersection } from '../../utils/array'

import type { VendorConsentStatus } from './types'

const DEFAULT_COOKIES_TO_KEEP = [
    'euconsent-v2',
    'didomi_token'
]

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

const deleteClientCookie = (name: string, domain?: string, path?: string) => {
    const cookiePath = path || "/"

    const cookie = [
        `${name}=`,
        "expires=Thu, 01 Jan 1970 00:00:01 GMT",
        `path=${cookiePath}`
    ]

    if (domain) {
        cookie.push(`domain=${domain}`)
    }

    document.cookie = cookie.join(";")
}

const clearCookiesOnConsentChange = (cookiesToKeep: string[]) => {
    const extendedCookiesToKeep = [
        ...DEFAULT_COOKIES_TO_KEEP,
        ...cookiesToKeep
    ]

    const cookiesToDelete = document.cookie
        .split(";")
        .map((cookie) => cookie.split("=")[0].trim())
        .filter((cookieName) => extendedCookiesToKeep.indexOf(cookieName) === -1)

    cookiesToDelete.forEach((cookieToDelete) => {
        const domains = (`.#${document.location.host.replaceAll(".", "#.#")}`).split("#")

        while (domains.length) {
            const possibleDomain = domains.join("")

            deleteClientCookie(cookieToDelete, possibleDomain)

            domains.shift()
        }

        deleteClientCookie(cookieToDelete, "")
    })

    const localStorageItemsToDelete = Object.keys(window.localStorage)
        .filter((localStorageItemName) => extendedCookiesToKeep.indexOf(localStorageItemName) === -1)

    localStorageItemsToDelete.forEach((localStorageItemName) => {
        window.localStorage.removeItem(localStorageItemName)
    })

    window.location.reload()
}

export {
    buildDefaultVendorStatus,
    shouldRemoveCookies,
    clearCookiesOnConsentChange
}
