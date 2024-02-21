// const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);->//undefined  // forEach is not return anything

// filter
// mainly it used for check condition is 
// it return values
const mynumber = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]

const newnumber = mynumber.filter( (num) => num > 4)

console.log(newnumber);

const newnum = mynumber.filter( (value) => {
    return value > 4
})

console.log(newnum);

const Nums = []

mynumber.filter( (num) =>{
    if (num > 4) {
        Nums.push(num)
    }
})

console.log(Nums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let booksinfo = books.filter( (bk) => bk.genre == "History")

booksinfo = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log(booksinfo);

//map

const numarr = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]

// const  newnumarr= mynumber.map( (num) => {return num+10})

// console.log(newnumarr);


// ⛓ chaining
const newnumarr = numarr
                  .map( (num) => num * 10)
                  .map((num) => num + 1)
                  .filter((num) => num >= 40)

console.log(newnumarr);                  
