function filter(arr, func) {
    const result = [];
    if (Array.isArray) {
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i], i, arr)) {
                result.push;
            }
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const greaterThanThree = filter(numbers, num => num > 3);
console.log(greaterThanThree);