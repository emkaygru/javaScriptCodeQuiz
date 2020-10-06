// quiz container 
var quizContainer = document.querySelector(".quizContainer");
// create variable for time left 
var timeLeft = document.querySelector('.timer');
// question count starting point
var currentQuestionIndex = 0;
// score starting point
var score = 0;
// correct answer variable 
var correct;
// paragraph for questions
var questionEl = document.querySelector(".qph");
// multiple choice options 
var choicesEl = document.querySelector(".choiceph");
// answer variables 
var answerEl = document.querySelector(".answerph");
// start page div 
var startDiv = document.querySelector(".startContainer");
// start button 
var startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startQuiz);

// high score  button 
var highScoreButton = document.querySelector("#start-highScore-btn");

// submit score button - final page
var submitScoreBtn = document.querySelector("#finalScore-btn");

// high score div
var highScoreDiv = document.querySelector(".highScoreHead")
// final score
var finalScoreEl = document.querySelector(".finalScore")
// game over/ YOU LOSE div
var youLoseDiv = document.querySelector(".youLose");

var buttonA = document.querySelector("#a");
var buttonB = document.querySelector("#b");
var buttonC = document.querySelector("#c");
var buttonD = document.querySelector("#d");


// list array of questions 
var questions = [{
    prompt: "What does the <p> tag stand for?",
    choiceOptions: [{
            text: "parent",
            correctAnswer: false
        }, {
            text: "paragraph",
            correctAnswer: true
        }, {
            text: "parakeet",
            correctAnswer: false
        },
        {
            text: "private",
            correctAnswer: false
        }
    ]
    // correctAnswer: "paragraph"
    // }, {
    //     prompt: "in CSS, how would you select the class, 'blue' ?",
    //     choiceOptions: ["#blue", "blue", ".blue", "blue."],
    //     correctAnswer: ".blue"
    // }, {
    //     prompt: "In javaScript, what do you add at the end of a function to call (or run) it?",
    //     choiceOptions: ["[]", "{}", "()", "++"],
    //     correctAnswer: "()"
    // }, {
    //     prompt: "In HTML, in what tag, do you give your site a Title?",
    //     choiceOptions: ["<body>", "<nav>", "<meta>", "<title>"],
    //     correctAnswer: "<title>"
    // }, {
    //     prompt: "How do you specify a font in CSS?",
    //     choiceOptions: ["font-weight", "font-family", "font", "font-decoration"],
    //     correctAnswer: "font-family"
}]
// final questions
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


function generateQuestions() {

    youLoseDiv.classList.add("hide")
    alert("Hello!");
    startTimer();

    showQuestions()

    // if (currentQuestionIndex === finalQuestionIndex) {
    //     return showScore();

    // }

    let currentQuestion = questions[currentQuestionIndex];

    questionEl.innerHTML = "<p>" + currentQuestion.question + "</p>";

    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;

}

function showQuestions(prompt) {
    questionEl.textContent = prompt.prompt;
    prompt.choiceOptions.forEach(answer => {

        var answerBtn = document.createElement("button");

        answerBtn.textContent = answer.text;
        alert(answer.text)
    });
}

// main call 
generateQuestions()


function startTimer() {
    // console.log("game start");
    let counterTime = timeLeft.textContent;


    let setTimer = setInterval(function () {
        counterTime--;
        timeLeft.textContent = "Time:" + counterTime;

        if (counterTime <= 0) {
            clearInterval(setTimer);
            showScore();

        }
    }, 1000);
    quizContainer.style.display = "block";
};


function startQuiz() {
    startTimer();
    youLoseDiv.style.display = "none";
    startContainer.style.display = "none";
    generateQuestions();

    // on click "start quiz" show first question there

    // while (i = 0; i < questions.length; i++) {

    //     if (choice === correctAnswer) {
    //         score++;
    //         currentQuestionIndex++
    //     } else if (choice !== correctAnswer) {
    //         timeLeft - 10;
    //         currentQuestionIndex++
    //     } else if (timeLeft === 0 || currentQuestionIndex === questions.length) {
    //         showScore();
    //     }
    // }

}


// show score function

function showScore() {
    quizContainer.style.display = "none";

    youLoseDiv.startButton = "block";

    clearInterval(timeInterval);
    highscoreInput.value = "";
    finalScoreEl.innerHTML = "";
}

// choice variables
let userChoice;

function checkAnswer(answer) {
    correct = questions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
        score++;
        currentQuestionIndex++
    } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        currentQuestionIndex++
    } else {
        score;
    }

}