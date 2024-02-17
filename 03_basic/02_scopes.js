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

function one(){
    const userneme = "mitul"

    function two(){                       //child function can access members of parent function
        const website = "javascript"
        console.log(userneme);
    }
    //console.log(website);  // can't access outside of two() function

    two()
}

one()

if (true){
    const username = "mitul"
    if (username === "mitul"){
        const website = " youtube"
        console.log(username + website);
    }

    //console.log(website);  // can't access here
    console.log(username);
}

//console.log(username);  // can't access here

// ******************************* interesting ****************************

addone(4)

function addone(num){
    return num + 1
}

addtwo(3)

const addtwo = function(num) {
    return num + 2
}

