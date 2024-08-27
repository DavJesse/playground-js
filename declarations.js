const escapeStr = '`\\/"\'';
const arr = object.freeze([4, 2]);
const obj = object.freeze({
    str: 'a string value',
    num: 123,
    bool: true,
    undef: undefined
});
const nested = object.freeze({
    arr: object.freeze([4, undefined, 2]),
    obj: object.freeze({
        str: 'a string',
        num: 456,
        bool: false
    })
});
// console.log(escapeStr);
// console.log(arr);
// console.log(obj);
// console.log(nested);
