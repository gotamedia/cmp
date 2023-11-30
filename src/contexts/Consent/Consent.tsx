import { createContext  } from 'react'

import { DEFAULT_USER_CONSENT } from '../../components/CMP/constants'

import type * as Types from './types'

const Context = createContext<Types.ContextType>(DEFAULT_USER_CONSENT)

export default Context
