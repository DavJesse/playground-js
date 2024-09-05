function longWords(arr) {
    return arr.every(str => {
        return typeof str === 'string' && str.length >= 5;
    });
};

function oneLongWord(arr) {
    return arr.some(str => {
        return typeof str === 'string' && str.length >= 10;
    });
};

function noLongWords(arr) {
    return arr.every(str => {
        return !(typeof str === 'string' && str.length >= 7);
    });
}

//console.log(longWords([12, 'locket', 'tokens']))