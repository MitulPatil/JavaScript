let score="33"
let s="33abc"
console.log(typeof score);
console.log(typeof(score));

let ValueInNumber=Number(score)
console.log(typeof ValueInNumber);
console.log(ValueInNumber);

let num=Number(s)
console.log(typeof num);
console.log(num);

/*  "33"=>33 type->Number
    "33abc"=>NaN type->Number
    true->1 & false->0
    null->0
    unefined->NaN    
*/

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
    1->true & 0->false
    ""->false
    "mitul"->true
*/ 

/*****************************  Operations ******************************/

let N=3
let negN=-N
console.log(negN);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);


let str1="hello"
let str2=" mitul"
let str3 = str1 + str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

let counter=100
counter++;
console.log(counter);
++counter;
console.log(counter);