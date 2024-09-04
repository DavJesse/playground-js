function dayOfTheYear(date) {

   const firstDate = new Date(date.getFullYear().toString().padStart(4, '0') )
   const timeDif = date - firstDate
   const daySinceFirst = (timeDif / (1000 * 60 * 60 * 24))

   return Math.floor(daySinceFirst)++
}
console.log(dayOfTheYear(new Date('2024-01-01')))
console.log(dayOfTheYear(new Date('0001-01-01')))