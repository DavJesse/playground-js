const cutFirst = (str) => str.slice(2);
const cutLast = (str) => str.slice(0, str.length-2);
const cutFirstLast = (str) => cutLast(cutFirst(str));
const keepFirst = (str) => str.slice(0, 2);
const keepLast = (str) => str.slice(str.length-2);

function keepFirstLast(str) {
    if (str.length > 4) {
        return keepFirst(str) + keepLast(str)
    } else {
        return str
    }
}
//const keepFirstLast = (str) => keepFirst(str) + keepLast(str);

// console.log(cutFirst("Hello World"))
// console.log(cutLast("Hello World"))
// console.log(cutFirstLast("Hello World"))
// console.log(keepFirst("Hello World"))
// console.log(keepLast("Hello World"))
// console.log(keepFirstLast('afd'))
