var wins = 0;
var loses = 0;
var guessLeft = 9;
var guessSoFar = [];
var compChoice = ["a","c","d","e","f",];
var compGuess = '';
// var userGuess = []; //

//win or lose get letter
function computerSelectRandLetter(){
    compGuess = 
    compChoice[Math.floor(Math.random() * compChoice.length)];



}
// function to update HTML
function updateScores(){
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#loses").innerHTML = loses;
    document.querySelector("#guessleft").innerHTML = guessLeft;
    document.querySelector("#currentguess").innerHTML = guessSoFar;


}
// function to reset scores
function resetScores(){
    guessLeft = 9;
    guessSoFar = [];    
}

//runs the game
computerSelectRandLetter()
console.log(compGuess)

//logic for game what happens when key is pressed
document.onkeyup = function(event){
guessLeft--; 
var userguess = event.key.toLocaleLowerCase();
guessSoFar.push(userguess);
updateScores();

if (userGuess === compGuess){
    wins ++;
    updateScores();
    resetScores();
    computerSelectRandLetter();
}
if (guessLeft === 0 ){
    loses++
    updateScores();
    resetScores();
    computerSelectRandLetter();
}
}