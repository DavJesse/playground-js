function dayOfTheYear(date) {
   const firstDay = new Date(date.getFullYear(), 0, 1)
   const daySinceFirst = ((date.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24))

   return Math.floor(daySinceFirst)
}
// dayOfTheYear(new Date('2024-01-01'))
// console.log(dayOfTheYear(new Date('2024-01-03')))