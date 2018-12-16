
var alphabetLetters = ["a","b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessList = [];
var computerGuess = null;


document.onkeyup = function (event) {
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
var rand = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];

guessList.push(userGuess); 

if (userGuess == rand);
    {
wins++;
    }

else if (userGuess == 0);
 {
losses++;
}


