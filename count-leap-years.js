function countLeapYears(date) {
    const year = date.getFullYear();
    console.log(year-5)
    const result = 0;

    while (year > 0) {
        if (isLeapYear(year)) {
            result++;
        }
        year--
    }

    return result
}

function isLeapYear(date) {
    const year = date.getFullYear();

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

console.log(countLeapYears(new Date(2024, 1, 4)))