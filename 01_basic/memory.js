// Stack (Primitive), Heap (Non-Primitive)

// In Stack you get copy of variable,object
// In Heap you get reference of variable,object

let nameone="mitul"
let newname=nameone

newname="om"

console.log(nameone);
console.log(newname);

let userone ={
    email:"abc@gmail.com",
    upi:"user@ybl"
}

let usertwo=userone

usertwo.email="def@gmail.com"
console.log(userone.email);
console.log(usertwo.email);
