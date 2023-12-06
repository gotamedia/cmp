import { createContext } from 'react'

// TODO: FIX ME - Change path '@components/CMP/constants' to '@components/CMP'
// This is a dirty fix for a circular dependency error
// Possible solution - only use DEFAULT_USER_CONSENT here and remove DEFAULT_USER_CONSENT from the CMP component
import { DEFAULT_USER_CONSENT } from '@components/CMP/constants'

import type * as Types from './types'

const Context = createContext<Types.ContextType>(DEFAULT_USER_CONSENT)

export default Context
