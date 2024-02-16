function add(number1, number2){
    console.log(number1 + number2);
}

function addTwoNumber(num1, num2){
    return (num1+num2)
}

// add(3, 4)
// result = addTwoNumber(2, 3)
// console.log("Result: ", result);
// console.log(addTwoNumber(6, 3));

function loginUserMessage(username = "mitul"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("mitul"));
console.log(loginUserMessage());
