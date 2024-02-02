const every = <T = unknown>(arr: T[], value: unknown) => arr.every(i => i === value)

const some = <T = unknown>(arr: T[], value: unknown) => arr.some(i => i === value)

const hasIntersection = <T>(arrOne: T[], arrTwo: T[]): boolean => {
    const set1 = new Set(arrOne)
    return arrTwo.some(value => set1.has(value))
}

export {
    every,
    some,
    hasIntersection,
}
