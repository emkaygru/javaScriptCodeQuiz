var timer = 76;
// create variable for time left 
var timeLeft = document.querySelector('#timer');
// question count starting point
var currentQuestionIndex = 0;
// score starting point
var score = 0;

// buttons for a, b, c, d 
var buttonA = document.querySelector('#a');
var buttonB = document.querySelector("#b");
var buttonC = document.querySelector("#c");
var buttonD = document.querySelector("#d");
var buttons = document.querySelector("#buttons")
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
var resultsDiv = document.querySelector(".results");
// general buttons div
var buttons = document.querySelector("#buttons");
// high score div
var highScoreDiv = document.querySelector(".highScoreHead")
// final score
var finalScoreEl = document.querySelector(".finalScore")
// final questions
var multiChoiceEl = document.querySelector("#multichoice");

var highScoreDiv = document.querySelector("#highscore")
var highScoreInput = document.querySelector("#highscore-input")
var highScoreName = document.querySelector("#highscore-name")
var highScoreContainer = document.querySelector("#highscore-container")
// list array of questions 
var questions = [{
        query: "What does  <code> < p > </code> tag stand for?",
        choiceA: "parent",
        choiceB: "paragraph",
        choiceC: "parakeet",
        choiceD: "private",
        correctAnswer: "paragraph"
    },
    {
        query: "In CSS, how would you select the class, 'blue' ?",
        choiceA: "#blue",
        choiceB: "blue",
        choiceC: ".blue",
        choiceD: "blue.",
        correctAnswer: ".blue",
    },
    {
        query: "In javaScript, what do you add at the end of a function to call (or run) it?",
        choiceA: "[]",
        choiceB: "{}",
        choiceC: "()",
        choiceD: "++",
        correctAnswer: "()",
    }, {
        query: "In HTML, in what tag, do you give your site a Title?",
        choiceA: "<body>",
        choiceB: "<nav>",
        choiceC: "<meta>",
        choiceD: "<title>",
        correctAnswer: "<title>"
    }, {
        query: "How do you specify a font in CSS?",
        choiceA: "font-weight",
        choiceB: "font-family",
        choiceC: "font",
        choiceD: "font-decoration",
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
    showQuestions();
    generateQuestions();
}

function startTimer() {
    // console.log("game start");


    // alert('hi');

    let setTimer = setInterval(function () {
        timeLeft.textContent = "Time:" + timer;
        if (timer === 0) {
            clearInterval(setTimer);
            showScore();
        }
        timer -= 1;
    }, 1000);

};


// function to generate through questions -- still having issues with it showing up!? 
function generateQuestions() {
    var i = 0;


    questionsDiv.style.display = "visible";

    var multiChoiceA = document.createElement("button");
    var multiChoiceB = document.createElement("button");
    var multiChoiceC = document.createElement("button");
    var multiChoiceD = document.createElement("button");
    console.log(multiChoiceA);

    document.querySelector('#question').innerHTML = questions[i].query;
    multiChoiceA.setAttribute('data-answer', questions[i].choiceA)
    multiChoiceB.setAttribute('data-answer', questions[i].choiceB)
    multiChoiceC.setAttribute('data-answer', questions[i].choiceC)
    multiChoiceD.setAttribute('data-answer', questions[i].choiceD)

    multiChoiceA.innerHTML = questions[i].choiceA;
    multiChoiceB.innerHTML = questions[i].choiceB;
    multiChoiceC.innerHTML = questions[i].choiceC;
    multiChoiceD.innerHTML = questions[i].choiceD;


    var multiChoice = document.querySelector('#multichoice');
    multiChoice.appendChild(multiChoiceA);
    multiChoice.appendChild(multiChoiceB);
    multiChoice.appendChild(multiChoiceC);
    multiChoice.appendChild(multiChoiceD);

    // for (j = 0; j < questions.length; j++) {
    //     var multiChoice = document.createElement("button");
    //     document.querySelector("").appendChild(multiChoice);
    //     multiChoice.innerHTML = questions[j].choiceA;
    // }

    // for (var i = 0; i < questions.length; i++) {

    //     var response = questions[i].query;

    //     var questionTitle = document.createElement("p");
    //     questionTitle.innerHTML = questions[i].query;
    //     // document.getElementById("#question-div").appendChild(questionTitle); 
    //     questionsDiv.appendChild(questionTitle);

    //     if (response === questions[i].correctAnswer) {
    //         score++;
    //         currentQuestionIndex++;
    //         alert("You are Correct!")
    //     } else {
    //         // alert("Wrong Answer");
    //         timeLeft - 10;
    //     }
    //     break;
    // }
}





// hide start functions but can't get the buttons to hide hmmm
function hideStart() {

    startDivContainer.style.display = "none";
    questionsDiv.style.display = "none";
    buttons.style.display = "none";
    highScoreContainer.style.display = "none";

}
// function to hide or show when needed? is necessary?
function showQuestions() {
    questionsDiv.style.display = "block";
    multiChoiceEl.style.display = "visible";
    startButton.style.display = "none";

}
// show score at the end? 
function showScore() {
    startDivContainer.style.display = "none"
    resultsDiv.style.display = "flex";
    clearInterval(startTimer);
    highScoreName.value = "";
}
// input the score at the end of the quiz 
function scoreInput() {
    if (highScoreName.value === "") {
        alert("Initials cannot be blank");
        return false;
    } else {
        var savedHighScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
        var currentUser = highScoreName.value.trim();
        var currentHighScore = {
            name: currentUser,
            score: score
        };

        resultsDiv.style.display = "none";
        highScoreDiv.style.display = "block";

        savedHighScores.push(currentHighScore);
        localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores));
        generateHighScores();
    }
};