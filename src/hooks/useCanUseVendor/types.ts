import type { Vendors } from '../../components/CMP'

export type UseVendor = (vendor: Vendors) => (boolean | undefined)
