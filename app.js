var timer = 76;
// create variable for time left 
var timeLeft = document.querySelector('#timer');
// question count starting point
var currentQuestionIndex = 0;
// score starting point
var score = 0;

// start page div 
var startDivContainer = document.querySelector(".start-div-container");
// start button 
var startButton = document.querySelector("#start-button");
startButton.addEventListener("click", startQuiz);
// high score  button 
var highScoreButton = document.querySelector("#start-highScore-btn");
// submit score button - final page
var submitScoreBtn = document.querySelector("#finalScore-btn");
// questions div place holder
var questionsDiv = document.querySelector("#question-div");
// options / multiple choice div place holder
var optionsDiv = document.querySelector("#options");
// answer place holder
var answerDiv = document.querySelector("#answer");
// results div - may be the same as answer div, but adding it just in case
var resultsDiv = document.querySelector("#results");
// general buttons div
var buttons = document.querySelector("#buttons");
// high score div
var highScoreDiv = document.querySelector(".highScoreHead")
// final score
var finalScoreEl = document.querySelector(".finalScore")
// final questions



// list array of questions 
var questions = [{
        prompt: "What does the <p> tag stand for?",
        choiceOptions: ["parent", "paragraph", "parakeet", "private"],
        correctAnswer: "paragraph"
    },
    {
        prompt: "In CSS, how would you select the class, 'blue' ?",
        choiceOptions: ["#blue", "blue", ".blue", "blue."],
        correctAnswer: ".blue",
    },
    {
        prompt: "In javaScript, what do you add at the end of a function to call (or run) it?",
        choiceOptions: ["[]", "{}", "()", "++"],
        correctAnswer: "()",
    }, {
        prompt: "In HTML, in what tag, do you give your site a Title?",
        choiceOptions: ["<body>", "<nav>", "<meta>", "<title>"],
        correctAnswer: "<title>"
    }, {
        prompt: "How do you specify a font in CSS?",
        choiceOptions: ["font-weight", "font-family", "font", "font-decoration"],
        correctAnswer: "font-family"
    }
]
var finalQuestionIndex = questions.length;

// function to convert mins to seconds

// function minsToSeconds(minutes) {
//     return Math.floor(minutes * 60);
// }
//buttons layout the questions and answers

// on click, show question, store score/answer time/ and store answer

// scoring system what is the right answer and what is the ultimate win score/time

// object -- key pairs object questions answers 

// when the start button is clicked, start the timer and show question one 
function startQuiz() {
    startTimer();
    hideStart();

}


function startTimer() {
    // console.log("game start");

    // alert('hi');

    let setTimer = setInterval(function () {
        timer--;
        timeLeft.textContent = "Time:" + timer;

        if (timer === 0 || questions.length === finalQuestionIndex) {
            clearInterval(setTimer);
            showScore();

        }
    }, 1000);

};

// function showQuestions() {
//     questionsDiv.style.display = "visible";
// }

function generateQuestions() {

    for (var i = 0; i < questions.length; i++) {
        var response = questions[i].prompt;

        if (response === questions[i].correctAnswer) {
            score++;
            currentQuestionIndex++;
            alert("You are Correct!")
        } else {
            alert("Wrong Answer");
            timeLeft - 10;
        }
    }
}
// alert("you got " + score + "/" + questions.length); // optional alert for their "score"

function hideStart() {
    startButton.style.display = "none";
    startDivContainer.style.display = "none";
    questionsDiv.style.display = "visible";

}