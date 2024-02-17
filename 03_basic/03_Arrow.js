// this refers  to current context

const user = {
    username: "mitul",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    },

    function(){
        console.log("hi");
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// user.function()

// function one() {
//     let username = "mitul"          // you can't  use this in function 
//     console.log(this.username);
// }
// one()

// const one = function(){
//     let username = "mitul"          
//     console.log(this.username);
// }


// ***************** arrow function *****************
// const one = () => {
//     let username = "mitul"          
//     console.log(this.username);
// }

// one()

const addtwo = (num1, num2) =>{
    return num1 + num2                    // explicit return
}

console.log(addtwo(4,5));

const addnumber = (n1 ,n2) => (n1 + n2)  // implicit return 

console.log(addnumber(3, 4));

const objectreturn = () => ({username: "mitul"})

console.log(objectreturn());

