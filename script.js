// Get the elements from the document
var mango = document.getElementById("mango");
var score = document.getElementById("score");
var reset = document.getElementById("reset");
var save = document.getElementById("save");
// Get the new element for the message
var message = document.getElementById("message");

// Get the mango shape selector element
var mangoShape = document.getElementById("mango-shape");

// Initialize the score variable
var scoreValue = 0;

// Load the saved score from local storage if it exists
var savedScore = localStorage.getItem("savedScore");
if (savedScore) {
  scoreValue = parseInt(savedScore);
  score.textContent = scoreValue;
}

// Define a function to move the mango to a random position
function moveMango() {
  // Get the window width and height
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  // Get the mango width and height
  var mangoWidth = mango.width;
  var mangoHeight = mango.height;

  // Calculate the maximum possible x and y coordinates for the mango
  var maxX = windowWidth - mangoWidth;
  var maxY = windowHeight - mangoHeight;

  // Generate random x and y coordinates within the range
  var x = Math.floor(Math.random() * maxX);
  var y = Math.floor(Math.random() * maxY);

  // Set the mango position to the new coordinates
  mango.style.left = x + "px";
  mango.style.top = y + "px";
}

// Define a function to increase the score and update the display
function increaseScore() {
  // Increment the score value by one
  scoreValue++;

  // Update the score text content with the new value
  score.textContent = scoreValue;
}

// Define a function to reset the score and update the display
function resetScore() {
  // Set the score value to zero
  scoreValue = 0;

  // Update the score text content with the new value
  score.textContent = scoreValue;

  // Remove the saved score from local storage
  localStorage.removeItem("savedScore");
}

// Define a function to save the score to local storage
function saveScore() {
  // Save the score value as a string in local storage
  localStorage.setItem("savedScore", scoreValue.toString());

  // Show a message that says "The score has been saved"
  message.textContent = "The score has been saved";
  message.style.opacity = "1"; // Make it visible

  // Set a timeout function to hide the message after five seconds
  setTimeout(function() {
    message.style.opacity = "0"; // Make it invisible
  },5000);
}

// Define a function to change the mango shape
function changeMangoShape() {
  // Get the selected value from the mango shape selector
  var selectedValue = mangoShape.value;

  // Update the mango image with the selected value
  mango.src = selectedValue;
}

// Add an event listener to the mango element for click events
mango.addEventListener("click", function() {
  // Move the mango to a new position
  moveMango();

  // Increase the score by one
  increaseScore();
});

// Add an event listener to the reset button for click events
reset.addEventListener("click", function() {
  // Reset the score to zero
  resetScore();
});

// Add an event listener to the save button for click events
save.addEventListener("click", function() {
  // Save the score to local storage
  saveScore();
});

// Add an event listener to the mango shape selector for change events
mangoShape.addEventListener("change", function() {
  // Change the mango shape
  changeMangoShape();
});

// Move the mango to arandom position when the page loads
moveMango();