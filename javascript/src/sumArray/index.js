export function sumArray(array) {
    if (!array || array?.length <= 1) {
        return 0
    }
    const initialValues = {
        sum: 0,
        max: -Infinity,
        min: Infinity
    }

    const { sum, max, min } = array.reduce((acc, curr) => ({
        max: curr > acc.max ? curr : acc.max,
        min: curr < acc.min ? curr : acc.min,
        sum: acc.sum + curr
    }), initialValues)

    return sum - max - min
}