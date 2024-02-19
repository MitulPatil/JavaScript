const mynum = [1, 2, 3]

const mytotal = mynum.reduce(function (acc, currval){
    console.log(`accumulator: ${acc} and currentvalue: ${currval}`);
    return acc + currval
}, 0)

console.log(mytotal);

const newtotal = mynum.reduce((acc, currval) => (acc + currval), 0)

console.log(newtotal);

const shoppingcart = [
    {
        itemname : "js course",
        price : 299
    },
    {
        itemname : "python course",
        price : 399
    },
    {
        itemname : "java course",
        price : 499
    },
    {
        itemname : "data science course",
        price : 299
    }
]

const shopprice =shoppingcart.reduce((acc, item) => acc+ item.price ,0)

console.log(shopprice);