"use strict";

window.addEventListener("load", start)

function start(){
    console.log("javascript is running")
    num = generateRandomNumber();
}

function generateRandomNumber(){
    return Math.floor(Math.random()*99)+1;

}

function returnGuess(){
    const list = document.querySelector("#guess-list")
}

/*

function guessIsCorrect(guess){
    console.log("correct")
    const list = document.querySelector("#guess-list")
    const html = `<li>I guessed ${guess} - That was correct</li>`;
    list.insertAdjacentHTML("beforeend", html)
    document.querySelector("#guess-form").remove();

}

function guessIsTooLow(guess){
    console.log("too low")
    const list = document.querySelector("#guess-list")
    const html = `<li>I guessed ${guess} - that was too low! try again</li>`;
    list.insertAdjacentHTML("beforeend", html)
}

function guessIsTooHigh(guess){
    console.log("too high")

    const list = document.querySelector("#guess-list")
    const html = `<li>I guessed ${guess} - that was too high! try again</li>`;
    list.insertAdjacentHTML("beforeend", html)
}*/