function adder(arr) {
    return arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}

function sumOrMul(arr) {
    const initialVal = arr[0]%2 === 0 ? 1 : 0
    return arr.reduce((accumulator, currentValue) => {
        return currentValue%2 === 0 ? accumulator * currentValue : accumulator + currentValue;

    }, initialVal);
}

function funcExec(arr, initialVal = 0) {
    return arr.reduce((accumulator, currentFunc) => {
        return currentFunc(accumulator);
    }, initialVal);
}

// console.log(adder([1, 2, 3, 4, 5]))
// console.log(sumOrMul([2, 3, 4, 5, 6]))
// function add10(num) {
//     return num + 10;
// }

// function multiplyBy2(num) {
//     return num * 2;
// }
// console.log(funcExec([add10, multiplyBy2], 5));