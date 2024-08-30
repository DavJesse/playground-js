function indexOf(arr, el, startIndex=0) {
    let i = startIndex

    if (i < 0) {
        i += arr.length;
        if (i < 0) {
            i = 0;
        };
    };

    while (i < arr.length) {
        if (arr[i] === el) {
            return i;
        };

        if (i === arr.length -1) {
            return -1;
        };
        i++;
    };
};

function lastIndexOf(arr, el, startIndex=arr.length) {
    let i = startIndex

    if (i < 0) {
        i += arr.length;
        if (i < 0) {
            i = arr.length;
        };
    };

    while (i >= 0) {
        if (arr[i] === el) {
            return i;
        };

        if (i === arr.length -1) {
            return -1;
        };
        i--;
    };
};

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(indexOf(beasts, 'bison'))
console.log(indexOf(beasts, 'giraffe'))
console.log(indexOf(beasts, 'bison', 2))
console.log(indexOf(beasts, 'camel', -2))
console.log(indexOf(beasts, 'camel', -100))