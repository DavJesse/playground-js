// Sign return 1 for positive numbers, -1 for negative, and 0 for zero
// Shorthand: Using tertiary operators
//const sign = (num) => num > 0 ? 1 : num < 0 ? -1 : 0;

// Hybrid
// const sign = (num) => {
//     if (num > 0) {
//         return 1;
//     } else if (num < 0) {
//         return -1;
//     } else {
//         return 0;
//     }
// };

// Longhand
function sign(num) {
    if (num > 0) {
        return 1;
    } else if (num < 0) {
        return -1;
    } else {
        return 0;
    }
};

// Compares signs, returns 'true' if signs are the same
const sameSign = (num1, num2) =>
    sign(num1) === sign(num2) ? true : false;

// Print to console
// console.log(sign(5))
// console.log(sign(-12))
// console.log(sign(0))
// console.log(sameSign(5, 10))
// console.log(sameSign(-12, -8))
// console.log(sameSign(0, 0))