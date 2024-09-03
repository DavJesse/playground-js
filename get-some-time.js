 function firstDayWeek(week, year) {
    year = parseInt(year);

    let firstJan = new Date(year, 0, 1);
    let firstMonday = new Date(firstJan);

    firstMonday.setDate(firstJan.getDate() + (8 - firstJan.getDay()) % 7);

    let startDate = new Date(firstMonday);
    startDate.setDate(firstMonday.getDate() + (week - 1) * 7);

    if (startDate.getFullYear() < year) {
        return formatDate(firstJan);
    }

    return formatDate(startDate);

 }

 function formatDate(date) {
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth()+1).padStart(2, '0');
    let yyyy = date.getFullYear()

    return `${dd}-${mm}-${yyyy}`
 }

 console.log(firstDayWeek(1, '2024'))