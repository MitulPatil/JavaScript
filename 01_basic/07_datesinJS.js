//  Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString()); // date with time 
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

// let newDate = new Date(2024, 0, 19)  // in JS month start from 0
// console.log(newDate.toDateString());

let newDate = new Date(2024, 0, 19, 5, 3) 
console.log(newDate.toLocaleString());