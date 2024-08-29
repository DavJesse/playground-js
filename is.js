//const is = {}
    is.num = (value) => typeof value === 'number' ? true : false,
    is.nan = (value) => Number.isNaN(value),
    is.str = (value) => typeof value === 'string' ? true : false,
    is.bool = (value) => typeof value === 'boolean' ? true : false,
    is.undef= (value) => typeof value === 'undefined' ? true : false,
    is.def = (value) => typeof value !== 'undefined' ? true : false,
    is.arr = (value) => typeof value === 'array' ? true : false,
    is.obj = (value) => typeof value === 'object' && value !== null,
    is.fun = (value) => typeof value === 'function' ? true : false,
    is.truthy = (value) => !!value,
    is.falsy = (value) => !value
 
// console.log(is.num(5))
// console.log(is.nan('k'))
// console.log(is.str('t'))
// console.log(is.bool(5))
// console.log(is.undef(5))
// console.log(is.def(5))
// console.log(is.arr(5))
// console.log(is.obj(5))
// console.log(is.fun(5))
// console.log(is.truthy(5))
// console.log(is.falsy(5))