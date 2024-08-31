function letterSpaceNumber(str) {
    let result = [];
    const letSpaceNum = /[a-zA-Z] \d(?!\w)/g;
    let match;

    while ((match = letSpaceNum.exec(str)) !== null) {
        result.push(match[0]);
        //console.log(match)
    }
    return result
}

console.log(letterSpaceNumber("a 1,b 2!c 3 d4e 5f 6")); 
// Output: ["a 1", "b 2", "c 3", "f 6"]
console.log(letterSpaceNumber('example 1, example 20'))
