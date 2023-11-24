import {
    useRef,
    useMemo,
    useCallback
} from 'react'
import { DidomiSDK } from '@didomi/react'
import type {
    IUserStatus,
    OnReadyFunction
} from '@didomi/react'

import { DEFAULT_USER_CONSENT } from '../../contexts/UserConsent'
import useUserConsentContext from '../../hooks/useUserConsentContext/useUserConsentContext'

import defaultI18n from '../../utils/i18n.json'

import * as Constants from './constants'
import * as Styled from './style'
import * as Utils from './utils'
import type * as Types from './types'

const vendorsSet = new Set<string | number>(Object.values(Constants.Vendors))
const purposesSet = new Set<Constants.Purposes>(Object.values(Constants.Purposes))

const filterVendors = (vendor: Constants.Vendors) => vendorsSet.has(vendor)
const filterPurposes = (purpose: Constants.Purposes) => purposesSet.has(purpose)

const CMP: Types.CMPType = (props) => {
    const {
        i18n = defaultI18n,
        apiKey,
        noticeId,
        iabVersion,
        sdkPath,
        config,
        onReady,
        onConsentChanged,
        onNoticeShown,
        onNoticeClickMoreInfo,
        ...filteredProps
    } = props
    
    const cache = useRef<{ userStatus?: IUserStatus }>({ userStatus: undefined })

    const { _setUserConsent } = useUserConsentContext()

    const _config = useMemo(() => {
        return {
            ...Constants.DEFAULT_CONSENT_CONFIG,
            ...config
        }
    }, [config])

    const handleOnConsentChanged = useCallback((value: any) => {
        if (window.Didomi) {
            onReady?.(window.Didomi)
        }

        onConsentChanged?.(value)
    }, [onReady, onConsentChanged])

    const handleOnNoticeShown = useCallback(() => {
        const didomiNoticeElement = document.getElementById('didomi-popup')

        if (didomiNoticeElement) {
            didomiNoticeElement.scrollTo({ top: 0 })
        }

        onNoticeShown?.()
    }, [onNoticeShown])

    const handleOnNoticeClickMoreInfo = useCallback(() => {
        setTimeout(() => {
            const didomiNoticeElement = document.getElementById('didomi-consent-popup')

            if (didomiNoticeElement) {
                didomiNoticeElement.scrollTo({ top: 0 })
            }
        }, 100)

        onNoticeClickMoreInfo?.()
    }, [onNoticeClickMoreInfo])

    const handleOnReady = useCallback<OnReadyFunction>((didomi) => {
        const userStatus = didomi.getUserStatus()
        const allVendors: Types.VendorDidomi[] = didomi.getVendors()

        const shouldRemoveCookies = Utils.shouldRemoveCookies({ prevUserStatus: cache?.current?.userStatus, userStatus })
        cache.current.userStatus = userStatus

        const userConsentStatus = {
            vendorsEnabled: userStatus.vendors.consent.enabled.filter(filterVendors) as Constants.Vendors[],
            purposesEnabled: userStatus.purposes.consent.enabled.filter(filterPurposes) as Constants.Purposes[],
            vendorsDisabled: userStatus.vendors.consent.disabled.filter(filterVendors) as Constants.Vendors[],
            purposesDisabled: userStatus.purposes.consent.disabled.filter(filterPurposes) as Constants.Purposes[]
        }

        const status: Record<string, Types.VendorConsentStatus> = allVendors
            .filter(({ id }) => filterVendors(id))
            .reduce((acc, vendor) => {
                const isVendorApproved = userConsentStatus.vendorsEnabled.includes(vendor.id)
                const isVendorPurposesApproved = vendor?.purposeIds?.every((purposeId) => userConsentStatus.purposesEnabled.includes(purposeId))

                const name = vendor.name || i18n.vendors.filter(({ id }) => id === vendor.id)?.[0]?.name

                return ({
                    ...acc,
                    [vendor.id]: {
                        didUserApprove: isVendorApproved && isVendorPurposesApproved,
                        id: vendor.id,
                        name,
                        purposeIds: vendor.purposeIds
                    }
                })
            }, {})

        const updatedUserConsent = {
            ...DEFAULT_USER_CONSENT,
            shouldRemoveCookies,
            status: {
                ...DEFAULT_USER_CONSENT.status,
                ...status
            },
            isReady: true
        }

        userConsentStatus.vendorsEnabled.forEach((vendor) => { updatedUserConsent.vendors[vendor] = true })
        userConsentStatus.purposesEnabled.forEach((purpose) => { updatedUserConsent.purposes[purpose] = true })

        userConsentStatus.vendorsDisabled.forEach((vendor) => { updatedUserConsent.vendors[vendor] = false })
        userConsentStatus.purposesDisabled.forEach((purpose) => { updatedUserConsent.purposes[purpose] = false })

        _setUserConsent(updatedUserConsent)

        if (window.Didomi) {
            onReady?.(window.Didomi)
        }
    }, [i18n])

    return (
        <>
            <Styled.ConsentStyle />

            <DidomiSDK
                embedTCFStub
                gdprAppliesGlobally
                apiKey={apiKey}
                noticeId={noticeId}
                iabVersion={Number(iabVersion)}
                sdkPath={sdkPath}
                config={_config}
                onReady={handleOnReady}
                onConsentChanged={handleOnConsentChanged}
                onNoticeShown={handleOnNoticeShown}
                onNoticeClickMoreInfo={handleOnNoticeClickMoreInfo}
                {...filteredProps}
            />
        </>
    )
}

export default CMP
