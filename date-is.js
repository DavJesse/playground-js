function isValid(date) {
    return date instanceof Date && !isNaN(date.getTime());
}

function isAfter(date1, date2) {
    return isValid(date1) && isValid(date2) && date1 > date2;
}

function isBefore(date1, date2) {
    return !isAfter(date1, date2)
}

function isFuture(date) {
    const present = new Date();

    return isValid(date) && isAfter(date, present)
}

function isPast(date) {
    return !isFuture(date)
}

// const date1 = new Date('2023-09-02');
// const date2 = new Date('2023-09-01');

// console.log('date1 validity:', isValid(date1))
// console.log('date2 validity:', isValid(date2))
// console.log(isAfter(date1, date2)); // true
// console.log(isAfter(date2, date1));
// console.log(isBefore(date1, date2)); // false
// console.log(isBefore(date2, date1));
// console.log(isFuture(date1));
// console.log(isPast(date1));