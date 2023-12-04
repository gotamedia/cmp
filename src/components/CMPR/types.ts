import type {
    ReactNode,
    RefAttributes,
    ForwardRefExoticComponent,
    HTMLAttributes,
} from 'react'

import type { Vendors } from '@components/CMP'

type NativeDivProps = HTMLAttributes<HTMLDivElement>

interface CMPRProps extends NativeDivProps {
    vendor: Vendors
    children: ReactNode
}

type CMPRType = ForwardRefExoticComponent<CMPRProps & RefAttributes<HTMLDivElement>>

export type {
    CMPRType,
    CMPRProps,
}
