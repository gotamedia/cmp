import { EmbedVendors } from "../contexts/UserConsent"

const getVendorFromPlainHTML = (html: string) => {
    for (const vendorValues of Object.values(EmbedVendors)) {
        for (const pattern of Object.values(vendorValues.regex)) {
            const vendorFound = pattern.test(html)

            if (!vendorFound) continue

            return vendorValues.vendor
        }
    }

    return null
}

export default getVendorFromPlainHTML
