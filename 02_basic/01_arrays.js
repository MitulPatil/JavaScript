// Array

const arr1 = [1,2,3,4,5]
const arr2 = new Array(6,7,8,9,10)
console.log(arr1);

// Array methods

arr1.push(12)  //insert element at the end of the array 
arr1.push(21)
arr1.pop()    // remove element from last 

arr2.unshift(3)  // insert element at the starting of the array
arr2.shift()     // remove the starting element
console.log(arr1);
console.log(arr2);

console.log(arr1.includes(3));
console.log(arr1.indexOf(3));

const newarr = arr1.join()

console.log(arr1);
console.log(newarr); // typeof => string

// slice, splice 

console.log("A ",arr1);  //A  [ 1, 2, 3, 4, 5, 12 ]

const mny1 = arr1.slice(1, 3)  

console.log(mny1);  //[ 2, 3 ]
console.log("B ",arr1);  // B  [ 1, 2, 3, 4, 5, 12 ]

const mny2 = arr1.splice(1,3)
console.log(mny2);    // [ 2, 3, 4 ]
console.log("C ",arr1);  //C  [ 1, 5, 12 ]

//slice(start_index, end_index) =>
// slice() => when you execute slice it doesn't change given array
// splice() => when you execute splice it cut the given portion 