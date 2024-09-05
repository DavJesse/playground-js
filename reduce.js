function fold(arr, func, acc) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            acc = func(acc, arr[i]);
        }
    }
    return acc;
}

function foldRight(arr, func, acc) {
    if (Array.isArray(arr)) {
        for (let i = arr.length-1; i >= 0; i--) {
            acc = func(acc, arr[i]);
        }
    }
    return acc;
}

function reduce(arr, func) {
    let acc = typeof arr[0] === 'string' ? '' : 0;
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            acc = func(acc, arr[i]);
        }
    }
    return acc;
}

function reduceRight(arr, func) {
    let acc = typeof arr[0] === 'string' ? '' : 0;
    if (Array.isArray(arr)) {
        for (let i = arr.length-1; i >= 0; i--) {
            acc = func(acc, arr[i]);
        }
    }
    return acc;
}

const adder = (a, b) => a + b
// console.log(fold([1, 2, 3], adder, 2)) // returns 8 (2 + 1 + 2 + 3)
// console.log(foldRight([1, 2, 3], adder, 2)) // returns 8 (2 + 3 + 2 + 1)
console.log(reduce([1, 2, 3], adder)) // returns 6 (1 + 2 + 3)
console.log(reduceRight([1, 2, 3], adder)) // returns 6 (3 + 2 + 1)