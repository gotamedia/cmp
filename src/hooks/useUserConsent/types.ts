import {
    Vendors,
    Purposes
} from '../../components/CMP'


export type UseUserConsent = (items?: (Vendors | Purposes)[]) => { [k in (Vendors | Purposes)]: boolean | undefined }