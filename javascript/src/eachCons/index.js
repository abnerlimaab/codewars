export const eachCons = (array, n) =>
    array.reduce((acc, _, ind) =>
        n - 1 + ind < array.length
            ? [...acc, array.slice(ind, n + ind)]
            : acc, []);