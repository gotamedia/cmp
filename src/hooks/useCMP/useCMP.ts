import { useContext } from 'react'

import Context from '@contexts/Consent'

const useUserConsentContext = () => useContext(Context)

export default useUserConsentContext
