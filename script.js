"use strict";

let currentGuess; // declare currentGuess outside the functions, global varible, can be accessed from anywhere in the code

window.addEventListener("load", start);

function start() {
    document.getElementById("btn-start").addEventListener("click", generateGuess);
}

function generateGuess() {
    currentGuess = Math.floor(Math.random() * 99) + 1;
    
    // Display the initial guess in the list with a custom message
    updateGuessList(currentGuess, "My first guess");

    // Set up event listeners for the buttons
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

function guessIsCorrect(guess) {
    const list = document.querySelector("#guess-list");
    const html = `<li>I guessed ${guess} - That was correct!</li>`;
    list.insertAdjacentHTML("beforeend", html);
}

function guessIsTooLow(currentGuess) {
    // Calculate a new guess by multiplying the current guess by 1.5
    const newGuess = Math.floor(currentGuess * 1.5);

    // Ensure the new guess doesn't go above 100
    const boundedGuess = Math.min(newGuess, 100);
    
    // Update the guess list with the new guess and response
    updateGuessList(boundedGuess, "That was too low");
    
    // Return the bounded guess for further use
    return boundedGuess;
}

function guessIsTooHigh(currentGuess) {
    // Calculate a new guess by dividing the current guess by 2
    const newGuess = Math.floor(currentGuess / 2);

    // Ensure the new guess doesn't go below 1
    const boundedGuess = Math.max(newGuess, 1);
    
    // Update the guess list with the new guess and response
    updateGuessList(boundedGuess, "That was too high");
    
    // Return the bounded guess for further use
    return boundedGuess;
}

function updateGuessList(guess, response) {
    const list = document.querySelector("#guess-list");
    const html = `<li>I'm guessing ${guess} - ${feedback}</li>`;
    list.insertAdjacentHTML("beforeend", html);
}
