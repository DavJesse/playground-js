 function firstDayWeek(week, year) {
    let time = new Date(year);
    if (week === 1) {
        time.setHours(24);
        return formatDate(time);
    }
    
    let dayPlus = week * 7 * 24;
    time.setHours(dayPlus - 123);
    
    for (let i = 0; i < 7; i++) {
        if (getWeekDay(time) === 'Monday') {
            return formatDate(time);
        }
        time.setHours(-24);
    }
    return time;
}

function getWeekDay(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

 function formatDate(date) {
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth()+1).padStart(2, '0');
    let yyyy = String(date.getFullYear()).padStart(4, '0')

    return `${dd}-${mm}-${yyyy}`
 }

 console.log(firstDayWeek(2, '0001'))