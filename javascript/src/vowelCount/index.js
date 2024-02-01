export function vowelCount(str) {
    return str
        .split('')
        .filter(letter => 'aeiouAEIOU'.includes(letter))
        .length
}