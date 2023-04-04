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


