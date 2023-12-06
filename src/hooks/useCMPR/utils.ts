import type * as Types from './types'

const connectWords: Types.ConnectWords = (arg) => {
    return arg.reduce((prev, curr, idx, arr) => {
        const lastItem = (arr.length - 1) === idx

        return `${prev}${lastItem ? ' och ' : ', '}${curr}`
    })
}

export { connectWords }
