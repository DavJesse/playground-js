// Iteratively add a to itself to multiply it by b
function multiply(a, b) {
    let result = 0;
    while (b > 0) {
        result += a;
        b--;
    }
    return result;
};

// Iteratively subtract b from a to divide a by b
function divide(a, b) {
    let result = 1;
    while (a >=  b) {
        a -= b;
        result++;
    }
    return result;
};

// Iteratively subtract b from a to find the modulus
function modulo(a, b) {
    while (a >= b) {
        a -= b;
    }
    return a;
}

console.log(multiply(2, 6))
console.log(divide(7, 3))
console.log(modulo(7, 3))