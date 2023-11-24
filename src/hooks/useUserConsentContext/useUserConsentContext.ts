import { useContext } from 'react'

import { Context } from '../../contexts/UserConsent'

const useUserConsentContext = () => useContext(Context)

export default useUserConsentContext