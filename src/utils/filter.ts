import * as Constants from '@components/CMP/constants'

const vendorsSet = new Set<string | number>(Object.values(Constants.Vendors))
const purposesSet = new Set<Constants.Purposes>(Object.values(Constants.Purposes))

const filterVendors = (vendor: Constants.Vendors) => vendorsSet.has(vendor)

const filterPurposes = (purpose: Constants.Purposes) => purposesSet.has(purpose)

export {
    vendorsSet,
    purposesSet,
    filterVendors,
    filterPurposes,
}
