// Components
export * from './components/CMP'
export { default as CMP } from './components/CMP'
export * from './components/CMPR'
export { default as CMPR } from './components/CMPR'

export {
    DidomiSDK,
    type IDidomiObject,
    type OnConsentChangedFunction,
    type OnPreferencesClickPurposeFunction,
    type OnPreferencesClickVendorFunction,
    type OnReadyFunction,
} from '@didomi/react'

// Contexts
export * from './contexts/Consent'
export { default as Context} from './contexts/Consent'

// Hooks
export { default as useCanUseVendor } from './hooks/useCanUseVendor'
export { default as useConsent } from './hooks/useConsent'
export { default as useUserConsent } from './hooks/useUserConsent'
export { default as useCMP } from './hooks/useCMP'
export { default as useCMPR } from './hooks/useCMPR'

// Utils
export { default as i18n } from './utils/i18n.json'
export { default as open } from './utils/open'
export { default as getVendorFromPlainHTML } from './utils/getVendorFromPlainHTML'