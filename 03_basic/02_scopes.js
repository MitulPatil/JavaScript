var c = 300
let a = 200

if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("inner: ", a);
}

console.log(a); // let can't be accessible outside of block 
// console.log(b); // const can't be accessible outside of block
console.log(c); // var can access outside of block

