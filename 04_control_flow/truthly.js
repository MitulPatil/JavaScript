const useremail = ""

if (useremail) {
    console.log("got user email");
} else{
    console.log("Don't have user email");
}

// falsy values :- false, 0 ,-0, BigInt 0n, "", null, undefined, NaN

// truthly values :- "0", "false" , " ", [], {}, function(){}

// way to check array is empty or not
const arr = []

if (arr.length === 0) {
    console.log("Array is empty");
}

// way to check object is empty or not

const emptyobj = {}

if (Object.keys(emptyobj).length === 0) {
    console.log("object is empty");
}

// false == 0 -> true
// false == "" -> true
// 0 == "" -> true

// Nullish Coalescing Operator (??) : null undefined

let val;

// val = 5 ?? 10
val = null ?? 20
// val = undefined ?? 15
// val = null ?? 30 ?? 40

console.log(val);

// Terniary Operator (?:)
// condition ? true : false

const price = 100

price >= 80 ? console.log("less than 80") : console.log("more than 80");