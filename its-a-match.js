const normal = /hi/;
const begin = /^hi/;
const end = /hi$/;
const beginEnd = /^hi$/;

console.log(normal.test("hi there?"))
console.log(begin.test("hi there?"))
console.log(end.test("have you tried watches from asahi"))
console.log(beginEnd.test("hi"))