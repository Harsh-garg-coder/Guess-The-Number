const guessInput = document.querySelector(".guess-input");
const guessForm = document.querySelector(".guess-form");
const responseMessageBox = document.querySelector(".response-message");
const playAgainbtn = document.querySelector(".play-again-btn");
const remainingGuessesBox = document.querySelector(".remaining-guesses");
const previousGuessesBox = document.querySelector(".previous-guesses");

let responseMessage = "";
let randomNumber = generateRandomNumber();
let isGameOn = true;
let guessesLeft = 10;
let previousGuesses = [];

function handleSubmit(e) {
    e.preventDefault();

    if(!isGameOn) {
        return;
    }

    const guess = parseInt(guessInput.value);

    if(!isValidGuess(guess)) {
        showErrorMessage();
        return;
    }

    checkGuess(guess);
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

function isValidGuess(guess) {
    if(isNaN(guess)) {
        responseMessage = "Please Enter a Valid Number!";
        return false;
    } else if(guess < 1 || guess > 100) {
        responseMessage = "Please Enter a number in range 1 to 100!";
        return false;
    }
    return true;
}

function showErrorMessage() {
    responseMessageBox.innerHTML = responseMessage;
    responseMessageBox.style.color = "red";
}

function showNormalMessage() {
    responseMessageBox.innerHTML = responseMessage;
    responseMessageBox.style.color = "var(--white)";
}

function showSuccessMessage() {
    responseMessageBox.innerHTML = responseMessage;
    responseMessageBox.style.color = "green";
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        responseMessage = "Your guess is correct!";
        showSuccessMessage();
        endGame();
        return;
    } else if(guess < randomNumber) {
        responseMessage = "Guess is Too low!";
    } else {
        responseMessage = "Guess is Too high!";
    }

    guessesLeft--;
    previousGuesses.push(guess);
    showResponse();
    guessInput.value = "";
    
    if(guessesLeft === 0) {
        responseMessage = "You Lost!";
        showErrorMessage();
        endGame();
    }
}

function showResponse() {
    showNormalMessage();
    remainingGuessesBox.innerHTML = guessesLeft;
    previousGuessesBox.innerHTML = previousGuesses;
}

function showPlayAgainBtn() {
    playAgainbtn.style.display = "inline";
}

function hidePlayAgainBtn() {
    playAgainbtn.style.display = "none";
}

function endGame() {
    isGameOn = false;
    showPlayAgainBtn();
}

function resetGame() {
    isGameOn = true;
    guessesLeft = 10;
    previousGuesses = [];
    randomNumber = Math.floor(Math.random() * 100 + 1);
    responseMessage = "";
    guessInput.value = "";
    showResponse();
}

guessForm.addEventListener("submit", handleSubmit);
playAgainbtn.addEventListener("click", () => {
    hidePlayAgainBtn();
    resetGame();
});