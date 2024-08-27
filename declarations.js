const escapeStr = '`\\/"\'';
const arr = Object.freeze([4, 2]);
const obj = Object.freeze({
    str: 'a string value',
    num: 123,
    bool: true,
    undef: undefined
});
const nested = Object.freeze({
    arr: Object.freeze([4, undefined, 2]),
    obj: Object.freeze({
        str: 'a string',
        num: 456,
        bool: false
    })
});
// console.log(escapeStr);
// console.log(arr);
// console.log(obj);
// console.log(nested);
