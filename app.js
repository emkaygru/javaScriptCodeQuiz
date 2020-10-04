// create variable for time left 
let timeLeft = 76;
// question count starting point
let currentQuestionIndex = 0;
// score starting point
let score = 0;
// correct answer variable 
let correct;
// timer element that displays the time 
let timer = document.querySelector("#timer");
// quiz container 
let quizContainer = document.querySelector(".quiz-container");
// paragraph for questions
let questionEl = document.querySelector(".qph");

// multiple choice options 
let choicesEl = document.querySelector(".choiceph");

// answer variables 
let answerEl = document.querySelector(".answerph");

// start button 
let startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", setTimer);

// high score  button 
let highScoreButton = document.querySelector("#start-highScore-btn");



// game over/ YOU LOSE div
let youLoseDiv = querySelector(".youLose");

// list array of questions 
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


// function to convert mins to seconds

function minsToSeconds(minutes) {
    return Math.floor(minutes * 60);
}
//buttons layout the questions and answers

// on click, show question, store score/answer time/ and store answer

// scoring system what is the right answer and what is the ultimate win score/time

// object -- key pairs object questions answers 

// when the start button is clicked, start the timer and show question one 

function generateQuestions() {
    youLoseDiv.style.display = "none";

    if (currentQuestionIndex === finalQuestionIndex) {
        return showScore();
    }
    let currentQuestion = questions[currentQuestionIndex];


}

function startQuiz() {
    let displayQuestions;
    // show questions 

    // if user gets answer right show next question and add score
    if (user)
        //if user gets answer wrong, minus time, show next question and add score


        let timeInterval = setInterval(function () {
            timeLeft--;
            timer.textContent = "Time:" + timeLeft;

            if (timeLeft <= 0 || questionCount === questions.length) {
                clearInterval(timeInterval);
                showScore();
            }
        }, 1000);
};



// show score function

function showScore() {

}
// choice variables
let userChoice;
let finalQuestionIndex = questions.length;

function checkAnswer(answer) {
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
        score++;
        currentQuestionIndex++
    } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        currentQuestionIndex++
    } else {
        score;
    }

}