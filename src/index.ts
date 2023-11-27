// Components
export * from './components/CMP'
export { default as CMP } from './components/CMP'
export * from './components/CMPR'
export { default as CMPR } from './components/CMPR'

// Contexts
export * from './contexts/UserConsent'
export { default as Provider} from './contexts/UserConsent'

// Hooks
export { default as useCanUseVendor } from './hooks/useCanUseVendor'
export { default as useConsent } from './hooks/useConsent'
export { default as useUserConsent } from './hooks/useUserConsent'
export { default as useUserConsentContext } from './hooks/useUserConsentContext'
export { default as useCMPR } from './hooks/useCMPR'

// Utils
export { default as i18n } from './utils/i18n.json'
export { default as open } from './utils/open'
export { default as getVendorFromPlainHTML } from './utils/getVendorFromPlainHTML'