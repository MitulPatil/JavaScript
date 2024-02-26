// generate a random number

const randomColor = function(){
    const hex = '0123456789ABCDE';
    let color = '#';
    for(let i = 0; i < 6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
    
let intervalId;
const startChangingColor = function (){
    if(!intervalId){
        intervalId = setInterval(changeBgcolor,1000)
    }
    function changeBgcolor(){
        document.body.style.backgroundColor = randomColor();
    }
}
    
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}
document.querySelector('#start').addEventListener('click', startChangingColor)
    
document.querySelector('#stop').addEventListener('click', stopChangingColor)
    
    