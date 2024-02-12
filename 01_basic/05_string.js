const name="mitul"  //type->string
const repocount=40

//console.log(name +repocount +" value");

console.log(`my name is ${name} and my repo count is ${repocount}`); //it's called string interpolation

const gamename = new String("patil-mp")  //type->object
// console.log(typeof gamename);
// console.log(typeof name);

console.log(gamename[0]);
console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('t'));

const newstring = gamename.substring(0,3);  //you can't give negative value here
console.log(newstring);

const anotherstring = gamename.slice(-8,8) 
console.log(anotherstring);

const newS = "    mitul    "
console.log(newS);
console.log(newS.trim());

const url = "https://abc.com/google%20google"

console.log(url.replace('%20', "-"));

console.log(url.includes('google'));

const s="hi-hello-bye"

console.log(s.split("-"));