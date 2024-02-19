//forEach
//forEach calls the callbackfn function one time for each element in the array.
// callbackfn doesn't have name

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

coding.forEach(function (val){
    console.log(val);
})

coding.forEach( (item) => {
    console.log(item);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item , index, arr)=>{
    console.log(item, index, arr);
})

const language = [
    {
        languagename : "javascript",
        languagefilename : "js"
    },
    {
        languagename : "java",
        languagefilename : "java"
    },
    {
        languagename : "python",
        languagefilename : "py"
    }
]

// console.log(language[1].languagefilename);

// for (let i=0 ; i< language.length ; i++){
//     console.log(language[i].languagefilename);
// }

language.forEach( (item) => {
    console.log(item.languagefilename);
})