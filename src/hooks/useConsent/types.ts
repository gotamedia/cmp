import type { Vendors, Purposes } from '@components/CMP'

export type UseConsent = (items?: (Vendors | Purposes)[]) => (boolean | undefined)
