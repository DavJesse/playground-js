function matchCron(cron, date) {
    const cronDate = {
        day: date.getDay(),
        month: date.getMonth(),
        dateOfMonth: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes()
    }

    cron = cron.split(' ')
    
    const cronLib = {
        day: cron[4],
        month: cron[3],
        dateOfMonth: cron[2],
        hour: cron[1],
        minute: cron[0]
    }
    
    if (cronLib.day !== '*' && cronDate.day !== parseInt(cronLib.day)) {
        return false;
    } else if (cronLib.month !== '*' && cronDate.month !== parseInt(cronLib.month)-1) {
        return false;
    } else if (cronLib.dateOfMonth !== '*' && cronDate.dateOfMonth !== parseInt(cronLib.dateOfMonth)) {
        return false;
    } else if (cronLib.hour !== '*' && cronDate.hour !== parseInt(cronLib.hour)) {
        return false;
    } else if (cronLib.minute !== '*' && cronDate.minute !== parseInt(cronLib.minute)) {
        return false;
    } else {
        return true;
    }
}
//console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00')))