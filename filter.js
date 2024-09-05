function filter(arr, func) {
    const result = [];
    if (Array.isArray) {
        for (let i = 0; i < arr.length; i++) {
            if (func(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
    }
    return result;
}

function reject(arr, func) {
    const result =  [];
    if (Array.isArray) {
        for (let i = 0; i < arr.length; i++) {
            if (!func(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
    }
    return result;
}

function partition(arr, func) {
    const result = [];
    let yes = [];
    let no = [];

    if (Array.isArray) {
        yes = filter(arr, func);
        no = reject(arr, func);

        result.push(yes);
        result.push(no);
    }
    return result;
}

// const numbers = [1, 2, 3, 4, 5];
// const greaterThanThree = reject(numbers, num => num > 3);
// console.log(greaterThanThree);

// let numbers = [1, 2, 3, 4, 5];

// let result = partition(numbers, function(num) {
//   return num % 2 === 0;
// });

// console.log(result);