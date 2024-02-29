const user = {
    username: "mitul",
    logincount: 2,
    signedIn: true,

    getuserDetails: function(){
        // console.log("got user details");
        // console.log(this.username);
        console.log(this);
    }
}

// console.log(this);
// console.log(user.getuserDetails());

function User(username, logincount, signedIn){
    this.username = username
    this.logincount = logincount
    this.signedIn = signedIn

    return this
}

// const UserOne  = User("mitul", 4, true)
// const UserTwo = User("om", 3, false) // this will override 

const UserOne  = new User("mitul", 4, true)
const UserTwo = new User("om", 3, false) 

console.log(UserOne);
console.log(UserTwo);