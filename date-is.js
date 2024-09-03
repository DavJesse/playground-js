function isValid(date) {

    if (date instanceof Date) {
        return !isNaN(date.getTime());
    } else if ( typeof date === 'number') {
        return !isNaN(new Date(date).getTime());
    }
    return false;
}

function isAfter(date1, date2) {
    return isValid(date1) && isValid(date2) && new Date(date1) > new Date(date2);
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

// const date1 = new Date('2013-01-01');
// const date2 = new Date('2023-09-01');
// const date3 = Date.now()

// console.log('date1 validity:', isValid('2013-01-01'))
// console.log('date3 validity:', isValid(date3))
// console.log(isAfter(date1, date2)); // true
// console.log(isAfter(date2, date1));
// console.log(isBefore(date1, date2)); // false
// console.log(isBefore(date2, date1));
// console.log(isFuture(date1));
// console.log(isPast(date1));