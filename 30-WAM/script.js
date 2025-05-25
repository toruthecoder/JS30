// Calling elements from the dom
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

// Declaring and initializing variables
let lastHole;
let timeUp = false;
let score = 0;

// Function for random time
// Return a random number
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// Function for random hole
// Select a random hole every time
function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    // Checking if same hole is not repating
    if (holes === lastHole) {
        console.log(`Ahh That the sameOne budd`);
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

// Function for peep / to select a random time and in that random time
// select holes not consecutively add mole and if time is not up repeat
function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
    }, time);
}

// Function for start game
// score to 0 call peep and set time
function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000);
}

// Function for bonk
// validate the click
// Increamant the score
// remove the up class
// change the text content of scoreboard to score
function bonk(e) {
    if(!e.isTrusted) return;
    score++
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

// Event listeners for mouse click and mobile touch
moles.forEach(mole => {
    mole.addEventListener('click', bonk);
    mole.addEventListener('touchstart', bonk, { passive: true });
});
