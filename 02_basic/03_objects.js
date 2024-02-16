// the object which is create using constructure is called singleton => //objest.create
// using literals you can't create singleton

// using literals

const mysyb = Symbol("key1")

const user = {
    name: "mitul",
    "full name":"patil mitul",
    [mysyb]: "mykey1",
    age: 19,
    location: "vadodara",
    email: "abc@goggle.com",
    isLoggedIn: false,
}

// methods for accessing objects values

//1.dot notation

console.log(user.email);

//2. bracket notation

console.log(user["email"]);

console.log(user["full name"]);
console.log(user[mysyb]);

user.email = "pqr@google.com"
console.log(user);

//Object.freeze(user) // you can't change further 

user.email = "new@google.com"
console.log(user);

user.new = "hi"
console.log(user);

user.greeting = function(){
    console.log("Hello JS user");
}

user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());