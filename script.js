"use strict";

let currentGuess;
let start = 1;
let end = 100;
let guessCounter = 0;

window.addEventListener("load", startGame);

function startGame() {
    document.getElementById("btn-start").addEventListener("click", generateGuess);
}

function generateGuess() {
    currentGuess = Math.floor((start + end) / 2); 

    updateGuessList(currentGuess, "My first guess");

    const lowButton = document.getElementById("btn-lowguess");
    lowButton.removeEventListener("click", guessIsTooLow);
    lowButton.addEventListener("click", (event) => {
        event.preventDefault();
        currentGuess = guessIsTooLow(currentGuess);
    });

    const highButton = document.getElementById("btn-highguess");
    highButton.removeEventListener("click", guessIsTooHigh);
    highButton.addEventListener("click", (event) => {
        event.preventDefault();
        currentGuess = guessIsTooHigh(currentGuess);
    });

    const correctButton = document.getElementById("btn-correctguess");
    correctButton.removeEventListener("click", guessIsCorrect);
    correctButton.addEventListener("click", (event) => {
        event.preventDefault();
        guessIsCorrect(currentGuess);
    });
}

function guessIsTooLow(currentGuess) {
    start = currentGuess + 1;
    currentGuess = Math.floor((start + end) / 2);
    updateGuessList(currentGuess, "That was too low");
    updateGuessCounter(); // Update guess counter
    return currentGuess; 
}

function guessIsTooHigh(currentGuess) {
    end = currentGuess - 1;
    currentGuess = Math.floor((start + end) / 2);
    updateGuessList(currentGuess, "That was too high");
    updateGuessCounter(); // Update guess counter
    return currentGuess;
}

function guessIsCorrect(guess) {
    const list = document.querySelector("#guess-list");
    const html = `<li>I guessed ${guess} - That was correct!</li>`;
    list.insertAdjacentHTML("beforeend", html);
}

function updateGuessList(guess, response) {
    const list = document.querySelector("#guess-list");
    const html = `<li>I'm guessing ${guess} - ${response}</li>`;
    list.insertAdjacentHTML("beforeend", html);
}

function updateGuessCounter() {
    guessCounter++;
    const guessCounterElement = document.getElementById("guess-counter");
    guessCounterElement.textContent = `Guesses: ${guessCounter}`;
}
