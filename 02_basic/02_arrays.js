const marvel_heros = ["thor", "Ironman", "Spiderman"]
const Dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(Dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(Dc_heros) // this method returns new array
console.log(allHeros);

const all_new_Heros = [...marvel_heros, ...Dc_heros]  //spread operator 
console.log(all_new_Heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); 

console.log(Array.isArray("mitul"));
console.log(Array.from("mitul"));  // used to creat array
console.log(Array.from({name: "mitul"}));  // intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 , score3));