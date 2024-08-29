const is = {
    num: (value) => typeof value === 'number' ? true : false,
    nan: (value) => typeof value !== 'number' ? true : false,
    str: (value) => typeof value === 'string' ? true : false,
    bool: (value) => typeof value === 'boolean' ? true : false,
    undef: (value) => typeof value === 'undefined' ? true : false,
    def: (value) => typeof value !== 'undefined' ? true : false,
    arr: (value) => typeof value === 'array' ? true : false,
    obj: (value) => typeof value === 'object' && value !== null ? true : false,
    fun: (value) => typeof value === 'function' ? true : false,
    truthy: (value) => !!value,
    falsy: (value) => !value
}

console.log(is.num(5))
console.log(is.nan('k'))
console.log(is.str('t'))
console.log(is.bool(5))
console.log(is.undef(5))
console.log(is.def(5))
console.log(is.arr(5))
console.log(is.obj(5))
console.log(is.fun(5))
console.log(is.truthy(5))
console.log(is.falsy(5))