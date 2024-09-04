function sunnySunday(date) {
    const regularDay = date.getDay();
   let sunnyDay;
    if (regularDay === 0) {
        sunnyDay = 0
    } else {
        sunnyDay = regularDay -2
    }
    const weekdays = ['Monday', 'Tuesday',  'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    //console.log(sunnyDay)
    return weekdays[sunnyDay];
}

// console.log(sunnySunday(new Date('0001-01-07'))); // Should print "Monday"
// console.log(sunnySunday(new Date('0001-12-01'))); // Should print "Saturday" because it's a Sunday and Sunday is skipped
// console.log(sunnySunday(new Date('2024-09-07'))); // Should print "Friday"