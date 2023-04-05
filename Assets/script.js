let startBtn = document.querySelector("#start");
let clickBox = document.querySelector(".container");
let timeCount = document.querySelector("#time");

//Quiz Questions//
let question1 = {
  question: "In the popular 90's sitcom Seinfeld, Jerry Seinfeld had a neighbor across the hall whom they referred to as Kramer. What is this character's first name?",
  answer1: "Charles",
  answer2: "Robert",
  answer3: "Cosmo", //this is correct
  answer4: "Kermit",
};

let question2 = {
  question: "How many species of turtles are there?",
  answer1: "over 500",
  answer2: "over 310", //this is correct
  answer3: "over 50",
  answer4: "over 10",
}

let question3 = {
  question: "What is the Dharma Initiative?",
  answer1: "a non-profit organization",
  answer2: "a research project on a mysterious island focused on fringe science", //this is correct
  answer3: "the latest trending cocktail",
  answer4: "nothing; it hasn't been created yet",
}

let question4 = {
  question: "In the ages-old game of chess, what's the only move where a player can move more than one piece?",
  answer1: "the Check",
  answer2: "the Pin",
  answer3: "the Checkmate",
  answer4: "the Castle", //this is correct
}

let question5 = {
  question: "What is the best kind of coffee?",
  answer1: "Americano",
  answer2: "regular drip",
  answer3: "French press",
  answer4: "Trick question; any method of ingesting coffee is the best!", //this is correct
}

let quizQuestions = [question1, question2, question3, question4, question5]; //now we have an array of objects//can we loop through these after a click event occurs in #box2 - #box5??

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

function showQuestion1 () {
  let box1 = document.querySelector("#box1");
  box1.textContent = quizQuestions[0].question;//access the nested object

  let box2 = document.querySelector("#box2");
  box2.textContent = quizQuestions[0].answer1;
  let box3 = document.querySelector("#box3");
  box3.textContent = quizQuestions[0].answer2;
  let box4 = document.querySelector("#box4");
  box4.textContent = quizQuestions[0].answer3;
  let box5 = document.querySelector("#box5");
  box5.textContent = quizQuestions[0].answer4;

};

function evalAnswer () {

}

function answerResponse () {

}

function reduceTime () {

}

function endGame () {

}

clickBox.addEventListener("click", function(e) {
  let click = e.target;
  if (click.matches("#start")) {
    startTimer();
    showQuestion1() }
  else if (click.matches("#box4")) {
      console.log("correct");
    };
  });

// for (i = 0;)


