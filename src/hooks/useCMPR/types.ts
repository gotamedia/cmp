import type { Vendors } from '../../components/CMP'

export type UseCMPR = (vendor: Vendors) => {
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