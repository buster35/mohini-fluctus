//Storing High Score//

//State
//these variables represent the actual working state of the webpage; we are ALWAYS using our global variables to manage state//

//Single Source of Truth//
//if we're always looking at global variables for current state data, we do not need to look anywhere else//
var currentScoreDiv = document.querySelector(".current-score") 
var treasureDiv = document.querySelector(".treasure-score")

var playerName

var highScore

var treasureCount = []

function start(){
  playerName = localStorage.getItem("player")
  highScore = localStorage.getItem("highScore")
  treasureCount = JSON.parse(localStorage.getItem("treasureCount"))
}
//Once we pull from local storage, we don't need to do this again, we are simply updating the variables//

function displayCurrentScore() {//the purpose of this function is to ALWAYS and only to make sure that the current score div tag is updated (CHANGING STATE), and will always obtain its information from local storage//
  currentScoreDiv.textContent = currScore;
  treasureDiv.textContent = treasureCount;

  saveScore()
}

function saveScore() {
  localStorage.setItem("lastSavedScore", currScore)
}

start();