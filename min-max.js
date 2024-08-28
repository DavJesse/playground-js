const max = (num1, num2) => {
    const result = num1>num2 ? num1 : num2
    return result
};
const min = (num1, num2) => {
    const result = num1<num2 ? num1 : num2
    return result
};

// Test functions
console.log(max(10, 20));
console.log(max(-10, -20));
console.log(max(-10, 20));
console.log(min(10, 20));
console.log(min(-10, -20));
console.log(min(-10, 20));
