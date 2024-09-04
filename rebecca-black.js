function isFriday(date) {
    const weekDay = date.getDay();
    return weekDay === 5;
}

function isWeekend(date) {
    const weekDay = date.getDay();
    
    if (weekDay === 6 || weekDay === 0) {
        return true;
    } else {
        return false;
    }
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

function isLastDayOfMonth(date) {
    const nextDay = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);
    return nextDay.getMonth() !== date.getMonth()
}

// console.log(isWeekend(new Date(2014, 9, 4)));
// console.log(isLeapYear(new Date(2000, 5, 6)));
// console.log(isLeapYear(new Date(1900, 7, 8)));
// console.log(isLeapYear(new Date(2030, 9, 10)));
// console.log(isLastDayOfMonth(new Date('2024-09-30')));
// console.log(isLastDayOfMonth(new Date('2024-09-29')));
