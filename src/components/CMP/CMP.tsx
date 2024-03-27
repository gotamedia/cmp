import { DidomiSDK } from '@didomi/react'
import type {
    IUserStatus,
    OnReadyFunction,
} from '@didomi/react'
import {
    useState,
    useRef,
    useCallback,
    useMemo,
} from 'react'

import Context from '@contexts/Consent'

import { filterVendors } from '@utils/filter'
import getConsentStatus from '@utils/getConsentStatus'

import * as Constants from './constants'
import * as Styled from './style'
import type * as Types from './types'
import * as Utils from './utils'
import defaultI18n from '../../utils/i18n.json'

const CMP: Types.CMPType = (props) => {
    const {
        disabled = false,
        iabVersion = 2,
        i18n = defaultI18n,
        cookiesToKeep = [],
        cleanUpCookies = true,
        config,
        children,
        onReady,
        onConsentChanged,
        onNoticeShown,
        onNoticeClickMoreInfo,
        ...filteredProps
    } = props

    const cache = useRef<{ userStatus?: IUserStatus }>({ userStatus: undefined })

    const [userConsent, setUserConsent] = useState({ ...Constants.DEFAULT_USER_CONSENT })

    const handleOnReady = useCallback<Types.HandleOnReady>((didomi, contextState) => {
        const userStatus = didomi.getUserStatus()
        const allVendors: Types.VendorDidomi[] = didomi.getVendors()

        const shouldRemoveCookies = Utils.shouldRemoveCookies({ prevUserStatus: cache?.current?.userStatus, userStatus })
        cache.current.userStatus = userStatus

        if (cleanUpCookies && shouldRemoveCookies) {
            Utils.clearCookiesOnConsentChange(cookiesToKeep)
        }

        const userConsentStatus = getConsentStatus(didomi)

        const status: Record<string, Types.VendorConsentStatus> = allVendors
            .filter(({ id }) => filterVendors(id))
            .reduce((acc, vendor) => {
                const isVendorApproved = userConsentStatus.vendors[vendor.id]
                const noPurposesRequired = !vendor?.purposeIds?.length
                const isVendorPurposesApproved = noPurposesRequired || vendor?.purposeIds?.every(purposeId => userConsentStatus.purposes[purposeId])

                const name = vendor.name || i18n.vendors.filter(({ id }) => id === vendor.id)?.[0]?.name

                return ({
                    ...acc,
                    [vendor.id]: {
                        didUserApprove: isVendorApproved && isVendorPurposesApproved,
                        id: vendor.id,
                        name,
                        purposeIds: vendor.purposeIds,
                    },
                })
            }, {})

        const updatedUserConsent = {
            ...contextState,
            status: {
                ...contextState.status,
                ...status,
            },
            vendors: {
                ...contextState.vendors,
                ...userConsentStatus.vendors,
            },
            purposes: {
                ...contextState.purposes,
                ...userConsentStatus.purposes,
            },
            shouldRemoveCookies,
            isReady: true,
            didUserConsent: !window.Didomi.shouldConsentBeCollected(),
        }

        setUserConsent(updatedUserConsent)

        onReady?.(didomi, updatedUserConsent)
    }, [
        cleanUpCookies,
        cookiesToKeep,
        i18n.vendors,
        onReady,
    ])

    const handleOnConsentChanged = useCallback((value: unknown) => {
        onConsentChanged?.(value)
        handleOnReady(window.Didomi, userConsent)
    }, [handleOnReady, onConsentChanged, userConsent])

    const onHandleOnReady = useCallback<OnReadyFunction>((value) => {
        handleOnReady(value, userConsent)
    }, [handleOnReady, userConsent])

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

    const context = useMemo(() => {
        return {
            ...userConsent,
            config: {
                ...userConsent.config,
                ...config,
            },
            i18n: {
                ...userConsent.i18n,
                ...i18n,
            },
        }
    }, [
        config,
        i18n,
        userConsent,
    ])

    const fontFamily = config?.theme?.font

    return (
        <Context.Provider value={context}>
            <Styled.ConsentStyle fontFamily={fontFamily} />

            {
                !disabled
                    ? (
                        <DidomiSDK
                            embedTCFStub
                            gdprAppliesGlobally
                            config={config}
                            iabVersion={Number(iabVersion)}
                            onReady={onHandleOnReady}
                            onConsentChanged={handleOnConsentChanged}
                            onNoticeShown={handleOnNoticeShown}
                            onNoticeClickMoreInfo={handleOnNoticeClickMoreInfo}
                            {...filteredProps}
                        />
                        )
                    : (
                            null
                        )
            }

            {children}
        </Context.Provider>
    )
}

export default CMP
