'use strict';

const max = 100;

const submitBtn = document.getElementById('submit');
const restartBtn = document.getElementById('restart');
const userInputFld = document.getElementById('input');
const feedbackDiv = document.getElementById('feedback');

var randomNumber = generateRandomNumber();


function generateRandomNumber () {
  let randomNum = Math.floor(Math.random() * (max+1));
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


document.ready(function() {
  submitBtn.addEventListener('click', submitEvent);
  restartBtn.addEventListener('click', restartGame);
});
