//for of
//mostly used for array

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greeting = "hello world!"

for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

// Maps :- The Map object holds key-value pairs and remembers the original insertion order of the keys
//      :- it contain unique value

const map = new Map()

map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('FR',"France")
map.set('FR',"France")

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key + ":-" + value);    // de-structuring of array
}

const myobject = {
    game1 : "NFS",
    game2 : "spiderman" 
}

for (const [key] of myobject) {         // myobject is not iterable
    console.log(key + ":-" + value);
}