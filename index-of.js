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

function lastIndexOf(arr, el, startIndex=arr.length-1) {
    let i = startIndex

    if (i < 0) {
        i += arr.length;
        if (i < 0) {
            i = arr.length-1;
        };
    };

    while (i >= 0) {
        if (arr[i] === el) {
            return i;
        };

        if (i === 0) {
            return -1;
        };
        i--;
    };
};

function includes(arr, el, startIndex=0) {
    let i = startIndex;

    if (i < 0) {
        i += arr.length;
        if (i < 0) {
            i = 0;
        }
    }

    while (i < arr.length) {
        if (arr[i] === el) {
            return true;
        }
        if (i === arr.length-1) {
            return false;
        }
        i++;
    };
};

// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// const numbers = [2, 5, 9, 2];

// console.log(includes(numbers, 2))
// console.log(includes(numbers, 7))
// console.log(includes(numbers, 2, 3))
// console.log(includes(numbers, 2, 2))
// console.log(includes(numbers, 5, -2))
 console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))