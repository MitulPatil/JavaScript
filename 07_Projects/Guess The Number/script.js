const randomnumber = parseInt((Math.random() *100 +1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('guessField')
const guessSlot = document.querySelector('.guesses')
const reamining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultparas')   

const p = document.createElement('p')