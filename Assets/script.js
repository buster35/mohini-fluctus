let startBtn = document.querySelector("#start");
let clickBox = document.querySelector(".container");
let timeCount = document.querySelector("#time");
let choiceButton = document.querySelector(".answerBox");
let qTracker = 0;
let questionEl = document.querySelector("#question");
let ansbutton1 = document.querySelector("#ansbutton1");
let ansbutton2 = document.querySelector("#ansbutton2");
let ansbutton3 = document.querySelector("#ansbutton3");
let ansbutton4 = document.querySelector("#ansbutton4");

//Quiz Questions//
let question1 = {
  question:
    "In the popular 90's sitcom Seinfeld, Jerry Seinfeld had a neighbor across the hall whom they referred to as Kramer. What is this character's first name?",
  answer1: "Charles",
  answer2: "Robert",
  answer3: "Cosmo", //this is correct; can I put something in the object to signify this?
  answer4: "Kermit",
};

let question2 = {
  question: "How many species of turtles are there?",
  answer1: "over 500",
  answer2: "over 310", //this is correct
  answer3: "over 50",
  answer4: "over 10",
};

let question3 = {
  question: "What is the Dharma Initiative?",
  answer1: "a non-profit organization",
  answer2:
    "a research project on a mysterious island focused on fringe science", //this is correct
  answer3: "the latest trending cocktail",
  answer4: "nothing; it hasn't been created yet",
};

let question4 = {
  question:
    "In the ages-old game of chess, what's the only move where a player can move more than one piece?",
  answer1: "the Check",
  answer2: "the Pin",
  answer3: "the Checkmate",
  answer4: "the Castle", //this is correct
};

let question5 = {
  question: "What is the best kind of coffee?",
  answer1: "Americano",
  answer2: "regular drip",
  answer3: "French press",
  answer4: "Trick question; any method of ingesting coffee is the best!", //this is correct
};

let quizQuestions = [question1, question2, question3, question4, question5]; //now we have an array of objects//can we loop through these after a click event occurs in #box2 - #box5??

let quizTimer;

function startTimer() {
  //we want to start a countdown timer
  quizTimer = 60;
  let timerInterval = setInterval(function () {
    quizTimer--;
    timeCount.textContent = quizTimer;
    if (quizTimer <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

function showAnswers() {
  let answer1 = quizQuestions[qTracker].answer1;
  let answer2 = quizQuestions[qTracker].answer2;
  let answer3 = quizQuestions[qTracker].answer3;
  let answer4 = quizQuestions[qTracker].answer4;

  ansbutton1.textContent = answer1;
  ansbutton2.textContent = answer2;
  ansbutton3.textContent = answer3;
  ansbutton4.textContent = answer4;
}

function showQuestion() {
  let text = quizQuestions[qTracker].question;
 
  questionEl.innerText = text;
  showAnswers();
}

function evalAnswer() {}

function answerResponse() {}

function reduceTime() {}

function endGame() {}

clickBox.addEventListener("click", function (e) {
  let click = e.target;
  if (click.matches("#start")) {
    startTimer();
    showQuestion();
  } else if (click.matches(".answerBox")) {
    //click button on quiz -> move to next question, analyze right/wrong,
    console.log("correct");
    evalAnswer();
    qTracker++;
    showQuestion();
  }
});

// for (i = 0;)
