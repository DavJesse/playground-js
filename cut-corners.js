function round(num) {
let intPart = floor(num);
let fracPart = num - intPart;

if (fracPart >= 0.5) {
    intPart += 1;
    return intPart;
} else {
    return intPart;
}
}

function ceil(num) {
    let intPart = floor(num);
    let fracPart = num - intPart;
    
    if (fracPart > 0.0) {
        intPart ++;
        return intPart;
    } else {
        return intPart;
    }
}
 
function floor(num) {
    let intPart = 0;
    let sign = num >= 0 ? 1 : -1;
    num = Math.abs(num)

    while (num >= 1) {
        num -= 1;
        intPart++;
    }

    if (sign > 0) {
        return intPart;
    } else {
        return -(intPart + 1);
    }
}

function trunc(num) {
   let sign = num >= 0 ? 1 : -1;
   num = Math.abs(num);
   num = floor(num);

   return num * sign;
}

const nums = [3.7, -3.7, 3.1, -3.1]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))

// console.log(trunc(4.3));  // Output: 4
// console.log(trunc(4.6));  // Output: 5
// console.log(trunc(-4.3)); // Output: -4
// console.log(trunc(-4.6)); // Output: -4
// console.log(floor(4.9));  // Output: 4
// console.log(floor(4.1));  // Output: 4
// console.log(floor(-4.1)); // Output: -5
// console.log(floor(-4.9));