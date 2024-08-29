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

// Print to console
// console.log(sign(5))
// console.log(sign(-12))
// console.log(sign(0))