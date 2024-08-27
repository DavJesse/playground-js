// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',  
// };

// Create deep copies of person object to ensure mutability
const clone1 = Json.parse(JSON.stringify(person));
const clone2 = JSON.parse(JSON.stringify(person));
const samePerson = person;

// Update object values
person.age++;
person.country = 'FR';

//// Print to terminal
// console.log(clone1)
// console.log(clone2)
// console.log(samePerson)
// console.log(person)