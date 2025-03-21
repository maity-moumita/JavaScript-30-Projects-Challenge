let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#userInput");
const startOver = document.querySelector(".startOver");
const guessSlot = document.querySelector(".guesses");
const Remaining = document.querySelector(".lastResult");
const LowOrHigh = document.querySelector(".lowOrHigh");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            CleanUpGuess(guess);
            displayMessage(`Game Over. Random number was ${random}`);
            endGame()
        } else {
            CleanUpGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === random) {
        displayMessage('You guessed it right');
        endGame();
    } else if (guess < random) {
        displayMessage('Number is TOOOO low');
    } else if (guess > random) {
        displayMessage('Number is TOOOO high');
    }
}

function CleanUpGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    Remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    LowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h3 id="newGame">Start new Game</h3>`
    p.style.backgroundColor = 'Teal'
    p.style.padding = '5px'
    p.style.border = '2px solid black'
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        random = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ``;
        Remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

