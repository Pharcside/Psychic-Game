var wins = 0;
var Losses = 0;
var guessLeft = 9;
var guessSoFar = [];
var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compGuess = '';
// var userGuess = []; //

//win or lose get letter
function computerSelectRandLetter() {
    compGuess = compChoice[Math.floor(Math.random() * compChoice.length)];



}
// function to update HTML
function updateScores() {
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#Losses").innerHTML = Losses;
    document.querySelector("#guessleft").innerHTML = guessLeft;
    document.querySelector("#guessSoFar").innerHTML = guessSoFar;


}
// function to reset scores
function resetScores() {
    guessLeft = 9;
    guessSoFar = [];
}

//runs the game
computerSelectRandLetter()
console.log(compGuess);

//logic for game what happens when key is pressed
document.onkeyup = function (event) {
    guessLeft--;
    var userGuess = event.key.toLowerCase();
    guessSoFar.push(userGuess);
    updateScores();

    if (userGuess === compGuess) {
        wins++;
        updateScores();
        resetScores();
        computerSelectRandLetter();
    }
    if (guessLeft === 0) {
        Losses++;
        updateScores();
        resetScores();
        computerSelectRandLetter();
    }
}