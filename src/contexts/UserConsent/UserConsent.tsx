import {
    createContext,
    useState,
    useMemo
} from 'react'

import { DEFAULT_USER_CONSENT } from './constants'
import type * as Types from './types'

const Context = createContext<Types.ContextType>(DEFAULT_USER_CONSENT)

const Provider: Types.ProviderType = ({ children, i18n }) => {
    const [userConsent, setUserConsent] = useState({ ...DEFAULT_USER_CONSENT })

    const context = useMemo(() => {
        return {
            ...userConsent,
            i18n: {
                ...userConsent.i18n,
                ...i18n
            },
            _setUserConsent: setUserConsent
        }
    }, [i18n, userConsent])

    return (
        <Context.Provider value={context}>
            {children}
        </Context.Provider>
    )
}

export { Context }
export default Provider
