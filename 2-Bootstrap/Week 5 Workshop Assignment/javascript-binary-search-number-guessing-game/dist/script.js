const maxOrig = 100;
let max = 100;
const minOrig = 1;
let min = 1;
let nGuesses = 0;
let currGuess = 0;
/* getElementById would be fine to use below as well instead of querySelector */
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
const lowerBtn = document.querySelector("#lowerBtn");
const higherBtn = document.querySelector("#higherBtn");
const startBtn = document.querySelector("#startBtn");
const guessBtn = document.querySelector("#guessBtn");
const resetBtn = document.querySelector("#resetBtn");
const instructions = document.querySelector("#instructions");
const myGuess = document.getElementById("#myGuess");

startBtn.addEventListener("click", tryGuess);
/* A note about the lines below: If you are passing arguments to an event handler function as in the addEventListener calls below, you need to wrap it in a function expression or arrow function so that it doesn't fire when the addEventListener call is reached. You do NOT need to know about this for this assignment, but if you want to read about it, see the documentation here: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Event_listener_with_an_arrow_function */
yesBtn.addEventListener("click", () => isGuessCorrect(true));
noBtn.addEventListener("click", () => isGuessCorrect(false));
lowerBtn.addEventListener("click", () => numIsHigher(false));
higherBtn.addEventListener("click", () => numIsHigher(true));
resetBtn.addEventListener("click", () => reset());

reset();

function tryGuess(){ 
    if (!nGuesses) { // first time guessing
        toggleBtns([startBtn], false);
        toggleBtns([guessBtn], true);
        myGuess.style.visibility = "visible";
    }
    nGuesses++;   
    myGuess.innerHTML = "Guess # " + nGuesses + ":"; // displays the guess count
    currGuess = Math.floor((max - min)/2) + min;
    console.log(`Guessing between ${min} and ${max} - guessing ${currGuess}. This is guess number ${nGuesses}`);
    guessBtn.textContent = currGuess + "!";
    instructions.textContent = "Am I correct?";
    toggleBtns([yesBtn, noBtn], true);
}

function toggleBtns(btnsArray, on) { 
    for (let btn = 0; btn < btnsArray.length; btn++) {
        if (on) {
            btnsArray[btn].style.display = "inline-block"; 
        } else {
            btnsArray[btn].style.display = "none";
        }
    }
}

function isGuessCorrect(correct) {
    toggleBtns([yesBtn, noBtn], false);
    if (correct) {
        instructions.textContent = `I guessed your number in ${nGuesses} tries!`;
        toggleBtns([resetBtn], true);
    } else {
        // this catches the impossible situation where all number ranges have been guessed
        if (min === max) {
            console.log("min = max");
            instructions.textContent = "Lies!!! I've explored every option between " + minOrig + " and " + maxOrig + "... Let's try again.";
            toggleBtns([resetBtn], true);
        } else {
            instructions.textContent = `Is your number higher or lower than ${currGuess}?`;   
            // only show lower or higher buttons if you're not at the bounds
            if (currGuess != min) {
                toggleBtns([lowerBtn], true); // switched these so higher on the right
            }
            if (currGuess != max) {
                toggleBtns([higherBtn], true); // switched these so higher on the right
            }
        }
    }
} 
  
function numIsHigher(higher) {
    if (higher) {
        min = Math.min(currGuess + 1, max); // using Math.min to catch out of bounds issues
        console.log("Changing the minimum to: " + min);
    } else {
        max = Math.max(currGuess - 1, min); // using Math.max to catch out of bounds issues
        console.log("Changing the maximum to: " + max);   
    }
    toggleBtns([lowerBtn, higherBtn], false); // switched these so higher on the right
    tryGuess();
}

function reset() {
    console.log("Reset pressed!");
    nGuesses = 0;
    currGuess = 0;
    min = minOrig;
    max = maxOrig;
    myGuess.style.visibility = "hidden";
    instructions.textContent = "Think of a number between " + minOrig + "-" + maxOrig + " and click the blue button when you're ready.";
    toggleBtns([resetBtn], false);
    toggleBtns([guessBtn], false);
    toggleBtns([startBtn], true);
}