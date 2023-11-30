import type { IDidomiConfig } from '@didomi/react'

import type { Vendors } from '../../components/CMP'

export type UseCMPR = (vendor: Vendors) => {
    config: IDidomiConfig,
    i18n: {
        headline: string,
        description: string,
        approveButton: string,
        cookieSettingButton: string
    },
    didUserApprove: any,
    approveVendor: () => void,
    openCookiesSettings: () => void
}