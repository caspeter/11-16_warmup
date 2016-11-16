'use strict';

const max = 100;

var submitBtn;
var restartBtn;
var userInputFld;
var feedbackDiv;

var randomNumber = generateRandomNumber();


function generateRandomNumber () {
  let randomNum = Math.floor(Math.random() * (max+1));
  console.log(randomNum);
  return randomNum;
}

function grabUserGuess () {
  let inputGuess = userInputFld.value;
  return parseInt(inputGuess);
}

function compareGuess (userGuess) {
  if (userGuess < randomNumber) {
    return 'Too low';
  } else if (userGuess > randomNumber) {
    return 'Too high!';
  } else {
    return 'You won!';
  }
}

function displayFeedback (feedback) {
  feedbackDiv.innerText = feedback;
}

function userWon () {
  submitBtn.disabled = true;
  restartBtn.style.visibility = 'visible';
}

function submitEvent () {
  let userGuess = grabUserGuess();
  let feedback = compareGuess(userGuess);
  displayFeedback(feedback);

  if (feedback === 'You won!') {
    userWon();
  }
}

function restartGame () {
  randomNumber = generateRandomNumber();
  submitBtn.disabled = false;
  restartBtn.style.visibility = 'hidden';
  userInputFld.value = "";
  feedbackDiv.innerText = "";
}


document.addEventListener("DOMContentLoaded", function() {
  submitBtn = document.getElementById('submit');
  restartBtn = document.getElementById('restart');
  userInputFld = document.getElementById('input');
  feedbackDiv = document.getElementById('feedback');

  submitBtn.addEventListener('click', submitEvent);
  restartBtn.addEventListener('click', restartGame);
});
