function round(num) {
    if (num === Infinity || num === -Infinity) {
        return num;
    }

    return floor(num + 0.5);
}

function ceil(num) {
    if (num === Infinity || num === -Infinity) {
        return num;
    }

    let intPart = floor(num);
    
   return intPart === num ? num : intPart + (num > 0 ? 1 : 0);
}
 
function floor(num) {
    if (num === Infinity || num === -Infinity) {
        return num;
    }

    let intPart = 0;
    let sign = num >= 0 ? 1 : -1;
    num = Math.abs(num)

    while (num >= 1) {
        num -= 1;
        intPart++;
    }

   return sign > 0 ? intPart : -intPart - 1
}

function trunc(num) {
    if (num === Infinity || num === -Infinity) {
        return num;
    }
    return num >= 0 ? floor(num) : -floor(-num);
}

// const nums = [3, -3, 3, -3, 0]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))

// console.log(trunc(4.3));  // Output: 4
// console.log(trunc(4.6));  // Output: 5
// console.log(trunc(-4.3)); // Output: -4
// console.log(trunc(-4.6)); // Output: -4
// console.log(floor(4.9));  // Output: 4
// console.log(floor(4.1));  // Output: 4
// console.log(floor(-4.1)); // Output: -5
// console.log(floor(-4.9));