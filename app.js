// create variable for time left 
let timeLeft = 76;
// question count starting point
let questionCount = 0;
// score starting point
let score = 0;
// list arry of questions 
let questions = [{
    prompt: "What does the <p> tag stand for?",
    choiceOptions: ["parent", "paragraph", "parakeet", "private"],
    correctAnswer: "paragraph"
}, {
    prompt: "in CSS, how would you select the class, 'blue' ?",
    choiceOptions: ["#blue", "blue", ".blue", "blue."],
    correctAnswer: ".blue"
}, {
    prompt: "In javaScript, what do you add at the end of a function to call (or run) it?",
    choiceOptions: ["[]", "{}", "()", "++"],
    correctAnswer: "()"
}, {
    prompt: "In HTML, in what tag, do you give your site a Title?",
    choiceOptions: ["<body>", "<nav>", "<meta>", "<title>"],
    correctAnswer: "<title>"
}, {
    prompt: "How do you specify a font in CSS?",
    choiceOptions: ["font-weight", "font-family", "font", "font-decoration"],
    correctAnswer: "font-family"
}, ]

// timer element that displays the time 
let timer = document.querySelector("#timer");

// start button 
let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", setTimer);

// high score  button 
let highScoreButton = document.querySelector("#start-highScore-btn");

// paragraph for questions
let questionDiv = document.querySelector(".qph");

// multiple choice options 
let choicesDiv = document.querySelector(".choiceph");

// answer variables 
let answerDiv = document.querySelector(".answerph");
// function to convert mins to seconds

function minsToSeconds(minutes) {
    return Math.floor(minutes * 60);
}
//buttons layout the questions and answers

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

function startQuiz() {

}