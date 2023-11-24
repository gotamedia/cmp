import {
    createContext,
    useState,
    useMemo
} from 'react'

import { DEFAULT_USER_CONSENT } from './constants'
import type * as Types from './types'

const Context = createContext<Types.ContextType>(DEFAULT_USER_CONSENT)

const Provider: Types.ProviderType = ({ children }) => {
    const [userConsent, setUserConsent] = useState({ ...DEFAULT_USER_CONSENT })

    const context = useMemo(() => {
        return {
            ...userConsent,
            _setUserConsent: setUserConsent
        }
    }, [userConsent])

    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )
}

export { Context }
export default Provider
