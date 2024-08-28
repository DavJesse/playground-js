// Takes a string, splits it by spaces...
// Returns an array of those substrings
function words(str) {
    return str.split(' ');
};

// Takes an array of strings, joins them with spaces to return a single string
function sentence(arr) {
    return arr.join(' ');
};

// Takes a string and returns it in upper case
function yell(str) {
    return str.toUpperCase();
};

// Takes a string and returns it in lower case, surrounded by *.
function whisper(str) {
    let low = str.toLowerCase();
    return `*` + low + `*`;
};

// Capitalizes first char
function capitalize(str) {
    const firstChar = str[0].toUpperCase();
    const restChars = str.slice(1)
    return firstChar + restChars
}

// // Test Cases for 'toUpperCase' Method
// console.assert('pouet'.toUpperCase() === 'POUET', 'Test Case 1 Failed: toUpperCase');

// // Test Cases for 'split' Method
// console.assert(JSON.stringify('hey-this-is-fun'.split('-')) === JSON.stringify(['hey', 'this', 'is', 'fun']), 'Test Case 2 Failed: split');

// // Test Cases for Chaining 'split' and 'join'
// console.assert('hey-this-is-fun'.split('-').join('_') === 'hey_this_is_fun', 'Test Case 3 Failed: split and join');

// // Test Case for Splitting a String into an Array of Letters
// console.assert(JSON.stringify('hey-this-is-fun'.split('')) === JSON.stringify(['h', 'e', 'y', '-', 't', 'h', 'i', 's', '-', 'i', 's', '-', 'f', 'u', 'n']), 'Test Case 4 Failed: split by empty string');

// // Test Case for Joining an Array into a String without Separators
// console.assert('hey-this-is-fun'.split('-').join('') === 'heythisisfun', 'Test Case 5 Failed: split and join without separator');
