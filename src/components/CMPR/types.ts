import type { FC, ReactNode } from 'react'

import type { Vendors } from '../CMP'

type CMPRProps = {
    vendor: Vendors,
    children: ReactNode | ReactNode[]
}

type CMPRType = FC<CMPRProps>

export type {
    CMPRType,
    CMPRProps
}
