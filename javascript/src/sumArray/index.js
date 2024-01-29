export function sumArray(array) {
    if (!array || array?.length <= 1) {
        return 0
    }

    const { sum, max, min } = array.reduce((acc, curr) => {
        return {
            max: curr > acc.max ? curr : acc.max,
            min: curr < acc.min ? curr : acc.min,
            sum: acc.sum + curr
        }
    }, { max: -Infinity, min: Infinity, sum: 0 })

    return sum - max - min
}