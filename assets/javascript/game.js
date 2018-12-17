
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessList = [];
var computerGuess = null;
var rand = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];


document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    
    guessList.push(userGuess);
    document.querySelector("#guessList").innerHTML = guessList;
    guessesLeft--;


    if (guessesLeft === 0){
        guessesLeft = 9;
        document.querySelector("#guessesLeft").innerHTML = guessesLeft;
        // reset once guesses left amounts to 9
    }
    if (userGuess === rand) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        // update html with number of wins
    }

    else  {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        // update html with number of losses
    }

//reset guessList after reaching 9 tries
// make sure it only runs for letters pressesd 

}
