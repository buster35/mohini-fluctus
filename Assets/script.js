let startBtn = document.querySelector("#start");
let clickBox = document.querySelector(".container");
let timeCount = document.querySelector("#time");

let questionEl = document.querySelector("#question");
let ansbutton1 = document.querySelector("#ansbutton1");
let ansbutton2 = document.querySelector("#ansbutton2");
let ansbutton3 = document.querySelector("#ansbutton3");
let ansbutton4 = document.querySelector("#ansbutton4");

let flashBox = document.querySelector("#correct-box");
let scoreBox = document.querySelector("#scorebox");

let score = 0;
let qTracker = 0;

//Quiz Questions// //function to "call" if incorrect answer is selected?
let question1 = {
  question:
    "In the popular 90's sitcom Seinfeld, Jerry Seinfeld had a neighbor across the hall whom they referred to as Kramer. What is this character's first name?",
  answer1: "Charles",
  answer2: "Robert",
  answer3: "Cosmo",
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

let quizQuestions = [question1, question2, question3, question4, question5];

let quizTimer;

function startTimer() {
  quizTimer = 60;
  let timerInterval = setInterval(function () {
    quizTimer--;
    timeCount.textContent = quizTimer;
    if (quizTimer === 0) {
      clearInterval(timerInterval)
      endGame()
    }
  }, 1000);
}

function showQuestion() {
  startBtn.innerText = "Reset";
  let text = quizQuestions[qTracker].question;
  questionEl.innerText = text;
  showAnswers();
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

function correctAnswers() {
  flashBox.innerText = "Correct!"
  scoreBox.textContent = score++ //working
  showQuestion();
};

function incorrectAnswers() { //working
  flashBox.innerText = "Incorrect!"
  showQuestion();
  reduceTime();
}

function reduceTime() {
  quizTimer = quizTimer - 15;
}

function endGame() {
//store score in local storage
//bring up high scores page -> replacing .container?

console.log("test"); //working!

}

clickBox.addEventListener("click", function (e) { //WORKING
  let click = e.target;

  if (click.matches("#start")) {
    score++
    qTracker = 0
    startTimer()
    showQuestion();
  } 
  
  else if (click.matches("#start") && qTracker > 0) {
    qTracker = 0;
    quizQuestions[0]
    flashBox.innerText = ""
  }
  
  else if (click.matches("#ansbutton3") && qTracker === 0) {
    qTracker = 1
    correctAnswers()
  }

  else if (click.matches("#ansbutton2") && qTracker === 1) {
    qTracker = 2
    correctAnswers()
  }
  
  else if (click.matches("#ansbutton2") && qTracker === 2) {
    qTracker = 3
    correctAnswers()
  }
      
  else if (click.matches("#ansbutton4") && qTracker === 3) { 
    qTracker = 4
    correctAnswers()
    }
    
  else if (click.matches("#ansbutton4") && qTracker === 4) {
    correctAnswers()
    endGame()
    return
  }
  else {
    qTracker++
    incorrectAnswers()
    return;
  }
  }
);
