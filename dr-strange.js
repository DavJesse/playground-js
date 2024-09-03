function addWeek(date) {

    const days = [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
        'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
    ];

    const epoch = new Date('0001-01-01');
    const diffTime = date.getTime() - epoch.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    const dayIndex = diffDays % 14;

    return days[dayIndex];
}

function timeTravel({ date, hour, minute, second }) {
    const newDate = new Date(date);

    if (hour !== undefined) newDate.setUTCHours(hour);
    if (minute !== undefined) newDate.setUTCMinutes(minute);
    if (second !== undefined) newDate.setUTCSeconds(second);

    return newDate
}

// console.log(addWeek(new Date('0001-01-01')));
// console.log(addWeek(new Date('0001-01-02')));
// console.log(addWeek(new Date('0001-01-07')));
// console.log(addWeek(new Date('0001-01-08')));
// console.log(addWeek(new Date('0001-01-09')));

console.log(timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }).getTime());