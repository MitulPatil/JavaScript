// The Promise object represents the eventual completion (or failure) of 
// an asynchronous operation and its resulting value.

const promiseOne = new Promise(function (resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complate');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'mitul', email: 'abc@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:'om', password:"12234"})
        }else{
            reject('ERROR: Somthing went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("The Pormise is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:'javascript', password:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

// async function


 async function consumePromiseFive(){        // This error originated either by throwing inside of 
    const response = await promiseFive       // an async function without a catch block                                          
    console.log(response);
 }

async function consumePromiseFive(){
    try {
        const response = await promiseFive                                              
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


// fetch useing async and await

async function getAllUser(){
    try {
        const response = await fetch('https://api.github.com/users/MitulPatil')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}

getAllUser()

// fetch using .then() and .catch()

fetch('https://api.github.com/users/MitulPatil')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))