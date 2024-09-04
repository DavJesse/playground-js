function sunnySunday(date) {
    const regularDay = date.getDay();
    const sunnyDay = regularDay === 0 ? 5 : regularDay - 1;
    const weekdays = ['Monday', 'Tuesday',  'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    //console.log(sunnyDay)
    return weekdays[sunnyDay];
}

console.log(sunnySunday(new Date('0001-01-07'))); // Should print "Monday"
console.log(sunnySunday(new Date('2024-09-01'))); // Should print "Saturday" because it's a Sunday and Sunday is skipped
console.log(sunnySunday(new Date('2024-09-07'))); // Should print "Friday"