// Immediately Invoked Function Expressions (IIFE)

// function newfun(){
//     console.log(`DB connected`);
// }

// newfun()

(function newfun(){              //named IIFE
    console.log(`DB connected`);
})();

( () => {                       //simple IIFE
    console.log("DB CONNECTED");
})();

((name) => {
    console.log(`${name}`);
})("mitul");