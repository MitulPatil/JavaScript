//function to add two number

function add(number1, number2){
    console.log(number1 + number2);
}

add(3, 4)

//function to add two number

function addTwoNumber(num1, num2){
    return (num1+num2)
}

result = addTwoNumber(2, 3)
console.log("Result: ", result);
console.log(addTwoNumber(6, 3));

//function for check user login status 

function loginUserMessage(username = "mitul"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("mitul"));
console.log(loginUserMessage());

//function to claculate cart price
function claculatecartprice(...num1){    // rest operator
    return num1
}

console.log(claculatecartprice(100, 200, 300, 400));

const user = {
    username: "mitul",
    price: 299
}

// function to handle objects

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "om",
    price: 399
})

//function to handle array
const myarray = [100, 200, 300, 400]

function returnArray(getArray){
    return getArray[1]
}

console.log(returnArray(myarray));