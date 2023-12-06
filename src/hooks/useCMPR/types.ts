import type { IDidomiConfig } from '@didomi/react'

import type { Vendors } from '@components/CMP'

export type UseCMPR = (vendor: Vendors | Vendors[]) => {
    config: IDidomiConfig
    i18n: {
        headline: string
        description: string
        approveButton: string
        cookieSettingButton: string
    }
    didUserApprove: any
    approveVendor: () => void
    openCookiesSettings: () => void
}

type ConnectWords = (arg: string[]) => string

export type {
    ConnectWords,
}
