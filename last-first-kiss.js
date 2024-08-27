// Declare functions
const first = (a) => a[0];
const last = (a) => a[a.length-1]
const kiss = (a) => [first(a), last(a)]

// Print outputs
console.log(first('string'))
console.log(last('string'))
console.log(kiss('string'))