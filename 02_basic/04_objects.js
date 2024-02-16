const user = new Object()

console.log(user);

user.id ="abc123"
user.name = "mitul"
user.IsLoggedIn = false

console.log(user);

const newuser = {
    email: "newuser@google.com",
    fullname: {
        userfirstname : {
            FN: "mitul",
            LN: "patil"
        }
    }
}

console.log(newuser.fullname.userfirstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}

//const obj4 = Object.assign({}, obj1, obj2, obj3) 

const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

const users =[
    {
        id: 1,
        email: "a1@gmail.com"
    },
    {
        id: 1,
        email: "a1@gmail.com"
    },
    {
        id: 1,
        email: "a1@gmail.com"
    }
]

console.log(users[1].email);

console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('IsLoggedIn'));

// object de_structure and JSON API

const course = {
coursename: "javascript",
price: "999",
courseInstuructor: "mitul"
}

const {courseInstuructor : Instructor} = course
const {coursename} = course

console.log(Instructor);
console.log(coursename);

//JSON

// {
//     "name":"mitul",
//     "coursename": "javascript",
//     "price":"free"
// }

[
    {},
    {},
    {}
]