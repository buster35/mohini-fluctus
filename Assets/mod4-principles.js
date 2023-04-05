var ______El = document.getElementById()
var ______El = document.querySelector()
var _______El = document.querySelectorAll()

var.setAttribute();

for (var i = 0; i < Array.length; i++) {
  array[i].setAttribute(_______);
} //for embedding "i" in an array to loop through a variable holding an array (i.e. querySelectorAll())//

.textContent; //useful property//
// CREATE: 
var tag = document.createElement(tagName);
// MODIFY: 
tag.textContent = "This was made via prompts. It's a " + tagName + ".";
// APPEND: 
document.body.appendChild(tag);

function setTime() {//the big function
  var ______ = setInterval(function () { //time function
     ____ (for time)--;
     ______.textContent = ____(for time) + " seconds until quiz terminates.";
     if (_____ (for time) === 0) {
      clearInterval(____ (for time));
      sendMessage(); //calls the sendMessage() function, which is yet to be created//
     }
  }, 1000)
}
function sendMessage() {
}
setTime(); //call big function

//Event Listener//
var.addEventListener("click", function(event) {//event object labeled because we need to reference it later in the call-back function; what matters is what it represents - ALL CLICKS inside the variable, usually a container//
  if statement with object.methods(); //ex. if (event.target.matches("button"))... example of event delegation//
});
function ____ (event) {
  //prevent default action (page reload); event.preventDefault();
  //stop propagation on event trigger; event.stopPropagation();
  
}

localStorage.setItem
localStorage.getItem


{/* <button class="answerBox" type="button" data-number="1" data-state="hidden"></button>
      <button class="answerBox" type="button" data-number="2" data-state="hidden"></button>
      <button class="answerBox" type="button" data-number="3" data-state="hidden"></button>
      <button class="answerBox" type="button" data-number="4" data-state="hidden"></button> */}




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






 // let box1 = document.querySelector("#box1");
  // box1.textContent = quizQuestions[0].question;//access the nested object

  // let box2 = document.querySelector("#box2");
  // box2.textContent = quizQuestions[0].answer1;
  // let box3 = document.querySelector("#box3");
  // box3.textContent = quizQuestions[0].answer2;
  // let box4 = document.querySelector("#box4");
  // box4.textContent = quizQuestions[0].answer3;
  // let box5 = document.querySelector("#box5");
  // box5.textContent = quizQuestions[0].answer4;