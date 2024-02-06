"use strict";

let currentGuess;
let start = 1;
let end = 100;

window.addEventListener("load", startGame);

function startGame() {
    document.getElementById("btn-start").addEventListener("click", generateGuess);
}

function generateGuess() {
    currentGuess = Math.floor((start + end) / 2); // Initial guess using binary search

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

function binarySearch(value) {
    let start = 1;
    let end = 100;

    while (start <= end) {
        let middle = start + Math.floor((end - start) / 2);

        if (middle === value) {
            return middle; // Found the correct value
        } else if (middle < value) {
            start = middle + 1; // Adjusting the start index
        } else {
            end = middle - 1; // Adjusting the end index
        }
    }

    return -1; // Value not found
}

function guessIsTooLow(currentGuess) {
    // Update the start range for binary search
    start = currentGuess + 1;

    // Calculate the next guess using binary search
    currentGuess = binarySearch(Math.floor((start + end) / 2));

    // Update the guess list with the new guess and response
    updateGuessList(currentGuess, "That was too low");

    return currentGuess; // Return the new guess for further use
}

function guessIsTooHigh(currentGuess) {
    // Update the end range for binary search
    end = currentGuess - 1;

    // Calculate the next guess using binary search
    currentGuess = binarySearch(Math.floor((start + end) / 2));

    // Update the guess list with the new guess and response
    updateGuessList(currentGuess, "That was too high");

    return currentGuess; // Return the new guess for further use
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
