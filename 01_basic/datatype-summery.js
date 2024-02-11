/*  Primitive 
    
    7-type: String, Number, Boolean,  null, undefined, Symbol, BigInt 

*/

const score=100
const scorevalue=100.2

const isloggedin= false
const str="123"

let useremail;

const id =Symbol('123')
const anotherid=Symbol('123')

console.log(id == anotherid);

/* 
    Reference (Non primitive)

    Array ,Objects, Functions
*/

const arr=[1,"hi","hello",12.3]

let myObj ={
    name: "mitul",
    age: 15
}

let myFunction = function(){
    console.log("hello");
}

console.log(typeof arr);
// non primitive => datatype is object 

/*  
    Number => "number"
    Null => "object"
    String => "string"
    Undefined => "undefined"
    Boolean => "boolean"
    Symbol => "symbol"
    Array => "object"
    Object => "object"
    function => "function"
*/