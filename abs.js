// Returns true when num is positive
const isPositive = (num) => num > 0;

function abs(num) {
    // Convert to positive if num is negative
    let result = num < 0 ? num*-1: num;
    return result
}

console.log(abs(5))
console.log(abs(0))
console.log(abs(-1))