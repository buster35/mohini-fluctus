let startBtn = document.querySelector("#start");
let clickBox = document.querySelector(".container");
let timeCount = document.querySelector("#time");


let quizTimer;

function startTimer () { //we want to start a countdown timer
  quizTimer = 60;
  let timerInterval = setInterval(function() {
    quizTimer--;
    timeCount.textContent = quizTimer;
    if (quizTimer <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000) 
};

function showQuestion () {
  let newElement = document.getElementById("box1");
  newElement.textContent = "In the popular 90's sitcom Seinfeld, Jerry Seinfeld had a neighbor across the hall whom the referred to as Kramer. What is this character's first name?"
}

function evalAnswer () {

}

function answerResponse () {

}

function reduceTime () {

}

function endGame () {

}

// - user arrives at the website and sees a central box with a start button below, a timer and high scores somewhere on the page -> create necessary html elements w/ classes or ids to access using js
// - user starts the quiz by clicking the start button -> eventlistener
TODO:// - timer starts -> function
// - multiple choice question is presented to user -> function/ create/modify/append
// - user clicks on a choice -> eventlistener
// - evaluates whether choice is right or wrong -> function
// - display right or wrong -> function 
// - if question is wrong, timer is reduced by x amount -> function
// - present user with the next question, and repeat previous 5 steps for each question
// - when all questions are answered or timer is zero -> end game -> function
// - **user is presented with form to save initials and score in a list -> eventlistener/function**



clickBox.addEventListener("click", function(e) {
  if (e.target.matches("#start")) { //could also declare/use a var.matches()//
    startTimer();
    showQuestion();
  }
})



