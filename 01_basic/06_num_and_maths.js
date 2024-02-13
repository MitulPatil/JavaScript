const score=400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(typeof balance);

console.log(balance.toString());
console.log(typeof balance);

console.log(balance.toFixed(2));

const othernumber = 23.8689

console.log(othernumber.toPrecision(3));

/*
    123.979 -> toPrecision(3)=>124
    1123.987 -> toPrecision(3)=>1.12e+3
*/


const hundreds=10000000
console.log(hundreds.toLocaleString()); //give output on US baised
console.log(hundreds.toLocaleString('en-IN')); 


console.log(Number.MAX_VALUE);

//+++++++++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.6));
console.log(Math.min(4,5,6,7,1));
console.log(Math.max(4,5,4,3,2,6,7));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);

