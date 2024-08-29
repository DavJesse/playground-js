// Repeats string num number of times
function repeat(str, num) {
    let result = ''; // Initiate result
    while (num > 0) {
        result += str; // Add to result
        num-- // Decrement num
    };
    return result;
};

// console.log(repeat('hello', -7))