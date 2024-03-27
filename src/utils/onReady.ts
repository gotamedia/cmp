let isDidomiReady = false
let onReadyQueue: (() => void)[] = []

if (typeof document !== 'undefined') {
    if (!Array.isArray(window.didomiOnReady)) {
        window.didomiOnReady = []
    }

    window.didomiOnReady.push(() => {
        isDidomiReady = true

        onReadyQueue.forEach((callback) => {
            callback()
        })

        onReadyQueue = []
    })
}

const onReady = (callback: () => void) => {
    if (isDidomiReady) {
        callback?.()
    }
    else {
        onReadyQueue.push(callback)
    }
}

export default onReady
