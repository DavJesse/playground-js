function countLeapYears(date) {
    let year = date.getFullYear();
    let result = 0;

    year--

    while (year > 0) {
        if (isLeapYear(year)) {
            result++;
        }
        year--
    }

    return result
}

function isLeapYear(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }
            return false
        }
        return true;
    }
    return false;
}

console.log(countLeapYears(new Date('1664-08-09')))