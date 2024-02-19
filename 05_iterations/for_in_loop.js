// for in
// The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), 
// including inherited enumerable properties.

// syntax :- for (const key in object) {

// }


const myobject = {
    "js" : "javascript",
    "cpp" : "c++",
    "rb" : "ruby",
    "swift" : "swift by apple"
}

// for (const [key] of myobject) {         // myobject is not iterable
//     console.log(key + ":-" + value);
// }

for (const key in myobject) {
    console.log(key);
}

for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);                   // It return index of array
}

for (const keys of programming) {
    console.log(keys);                 // It return value of array 
}

// const map = new Map()

// map.set('IN',"India")
// map.set('USA',"United State Of America")
// map.set('FR',"France")
// map.set('FR',"France")

// for (const key in map) {              // not possible 
//     console.log(key);
// }

