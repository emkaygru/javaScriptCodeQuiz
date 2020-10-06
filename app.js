var timer = 76;
// create variable for time left 
var timeLeft = document.querySelector('#timer');
// question count starting point
var currentQuestionIndex = 0;
// score starting point
var score = 0;
// correct answer variable 
var correct;
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
// final questions
var finalQuestionIndex = questions.length;


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

    }, {
        prompt: "in CSS, how would you select the class, 'blue' ?",
        choiceOptions: [{
                text: "#blue",
                correctAnswer: false
            },
            {
                text: "blue",
                correctAnswer: false
            },
            {
                text: ".blue",
                correctAnswer: true
            },
            {
                text: "blue.",
                correctAnswer: false
            }
        ],
    },
    {
        prompt: "In javaScript, what do you add at the end of a function to call (or run) it?",
        choiceOptions: [{
            text: "[]",
            correctAnswer: false
        }, {
            text: "{}",
            correctAnswer: false
        }, {
            text: "()",
            correctAnswer: true
        }, {
            text: "++",
            correctAnswer: false
        }],
    }, {
        prompt: "In HTML, in what tag, do you give your site a Title?",
        choiceOptions: [{
            text: "<body>",
            correctAnswer: false
        }, {
            text: "<nav>",
            correctAnswer: false
        }, {
            text: "<meta>",
            correctAnswer: false
        }, {
            text: "<title>",
            correctAnswer: true
        }],
        correctAnswer: "<title>"
    }, {
        prompt: "How do you specify a font in CSS?",
        choiceOptions: [{
            text: "font-weight",
            correctAnswer: false
        }, {
            text: "font-family",
            correctAnswer: true
        }, {
            text: "font",
            correctAnswer: false
        }, {
            text: "font-decoration",
            correctAnswer: false
        }],
        correctAnswer: "font-family"
    }
]


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


    removeEls(startButton);


}

function scoreQuestions() {

    if (questions.correctAnswer === true) {
        currentQuestionIndex++
    } else if (questions.correctAnswer === false) {
        currentQuestionIndex++
        timeLeft - 10;
    } else {
        showScore();
    }
}

//  function showQuestions(prompt) {
//      // questionEl.textContent = prompt.prompt;
//      prompt.choiceOptions.forEach(answer => {

//          var answerBtn = document.createElement("button");

//          answerBtn.textContent = answer.text;
//         alert(answer.text)
//      });
// }

// main call 
generateQuestions()


function startTimer() {
    // console.log("game start");

    alert('hi');

    let setTimer = setInterval(function () {
        timer--;
        timeLeft.textContent = "Time:" + timer;

        if (timer === 0) {
            clearInterval(setTimer);
            showScore();

        }
    }, 1000);

};

function hideStart() {
    startButton.style.display = "none";
}

function startQuiz() {
    startTimer();

    generateQuestions();
    hideStart();
    youLoseDiv.classList.add("show")


    // on click "start quiz" show first question there

    while (i = 0 < questions.length++) {

        if (choice === correctAnswer) {

            currentQuestionIndex++
        } else if (choice !== correctAnswer) {
            timeLeft - 10;
            currentQuestionIndex++
        } else if (timeLeft === 0 || currentQuestionIndex === questions.length) {
            showScore();
        }
    }

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