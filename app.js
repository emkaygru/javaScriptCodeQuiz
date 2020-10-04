// create variable for time left 
let timeLeft = 76;

// timer element that displays the time 
let timer = document.querySelector("#timer");

// start button 
let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", setTimer);

// high score  button 
let highScoreButton = document.querySelector("#start-highScore-btn");

// paragraph for questions
let qParagraph = document.querySelector(".qph");

// multiple choice options 
let choices = document.querySelector(".choices");

// answer variables 
let answer = document.querySelector(".answer");
// function to convert mins to seconds

function minsToSeconds(minutes) {
    return Math.floor(minutes * 60);
}
//buttons layout the questions and answers
// question count starting point

let questionCount = 0;

// on click, show question, store score/answer time/ and store answer

// scoring system what is the right answer and what is the ultimate win score/time

// convert 5 mins to seconds - find mathematical way to convert seconds to mins & vice versa

// object -- key pairs object questions answers 

// when the start button is clicked, start the timer and show question one 

function setTimer() {


    let timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "";
        timer.textContent = "Time" + timeLeft;

        if (timeLeft <= 0 || questionCount === questions.length) {
            clearInterval(timeInterval);

        }
    }, 1000);

}