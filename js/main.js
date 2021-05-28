var body = document.getElementById("body");
var titleText = document.getElementById("title");
var newGameButton = document.getElementById("newGameBtn");
var optionsButton = document.getElementById("optionsBtn");
var leaderboardButton = document.getElementById("leaderboardBtn");
var gameContainer = document.getElementById("gameContainer");
var firstLetter = document.getElementById("firstLetter");
var letters = document.getElementById("letters");
var word = "Κρεμαλα";

function newGame() {
    titleText.style.visibility = "hidden";
    newGameButton.style.visibility = "hidden";
    optionsButton.style.visibility = "hidden";
    leaderboardButton.style.visibility = "hidden";
    gameContainer.style.visibility = "visible";
    body.style.backgroundImage = "url('img/background_empty.jpg')";

    newWord("Κρεμαλα");
}

function newWord(word) {
    var dashes = word.length - 1
    var container = "";

    for (var x = 1; x <= dashes; x++) {
        container = container + "_ ";
    }
    firstLetter.innerHTML = word.substring(0, 1);
    letters.innerHTML = container;
}

function choice(letter) {
    var position = isInWord(letter);
    var container = "";
    if (position == -1) {
        alert("δεν υπάρχει")
    } else {
        var secondPosition = isInWord(letter, position + 1);
        if (secondPosition == -1) {
            for (var x = 1; x <= word.length - 1; x++) {
                if (x == position) {
                    container = container + letter + " ";
                } else {
                    container = container + "_ ";
                }
            }
        } else {
            for (var x = 1; x <= word.length - 1; x++) {
                //    TODO NEXT TIME (INCLASS)
            }
        }

        letters.innerHTML = container;
    }
}

function isInWord(letter, from = 0) {
    return word.toUpperCase().indexOf(letter, from);
}