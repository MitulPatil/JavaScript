// if

const score = 200

if (score > 100){
    let power = "run"
    console.log(`User power : ${power}`);
}
// console.log(`User power : ${power}`);  // can't access power 

// if-else

const temp = 41
if (temp <=50) {
    console.log("temprature is less then 50");
}
else {
    console.log("temprature is greater then 50");
}

// else if

let balance = 1000
// if (balance > 500) console.log("balance is grater than 500")

if (balance < 500) {
    console.log("balance is grater than 500");
} else if (balance < 750) {
    console.log("balance is grater than 750")
} else if (balance < 900) {
    console.log("balance is grater than 900")
} else{
    console.log("balance is grater than 1200")
}

const userLoggedIn = true
const debitcart = true
const LogeedInFromGoggle = true
const LoggedInfromEmail = true

if (userLoggedIn && debitcart) {
    console.log("aloow to buy course");
}

if (LogeedInFromGoggle || LoggedInfromEmail) {
    console.log("user logged in");
}