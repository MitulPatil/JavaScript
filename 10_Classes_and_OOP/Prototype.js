let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: 'hammer',
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.mitul = function(){
    console.log(`mitul is present in all objects`);
}

heroPower.mitul()
myHeros.mitul()

Array.prototype.heymitul = function(){
    console.log(`Mitul says hello`);
}

// heroPower.heymitul()
myHeros.heymitul()

// Inheritance or prototyple inheritance

const User = {
    name: "mitul",
    email: "abc@gmail.com"
}
const Teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// morder syntax

Object.setPrototypeOf(TeachingSupport, Teacher)  // inherite the property of Teacher to TeachingSupport

let MyName= "mitul    "

// console.log(MyName.truelength());

String.prototype.trueLenght = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

MyName.trueLenght()
"javascript   ".trueLenght()
"java".trueLenght()
