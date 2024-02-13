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

// let newDate = new Date(2024, 0, 19, 5, 3) 
// console.log(newDate.toLocaleString());

// let newdate = new Date("2024-01-19")  // "yy-mm-dd"

let newdate = new Date("01-15-2024")
console.log(newdate.toLocaleString());

let myTimeStamp = Date.now()  // used to create poll game

console.log(myTimeStamp);
console.log(newdate.getTime());
console.log(Date.now());  //Returns the number of milliseconds elapsed since midnight, January 1, 1970
console.log(Math.floor(Date.now()/1000));  // convert milliseconds to seconds

let newD = new Date()
console.log(newD);
console.log(newD.getMonth() + 1);
console.log(newD.getDay());

newD.toLocaleString('defaule',{
    weekday:"long"
})