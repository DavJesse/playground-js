const escapeStr = '`\\/"\'';
const arr = [4, 2]

Object.freeze(arr)

const obj = {
    str: 'a string value',
    num: 123,
    bool: true,
    undef: undefined
}

Object.freeze(obj)

const nested = {
    arr: [4, undefined, 2],
    obj: {
        str: 'a string',
        num: 456,
        bool: false
    }
}

Object.freeze(nested.arr)
Object.freeze(nested.obj)

// console.log(escapeStr);
// console.log(arr);
// console.log(obj);
// console.log(nested);
