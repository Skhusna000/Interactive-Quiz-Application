//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Who is the father of the computers?",
    options: ["James Gosling", "Charles Babbage", "Dennis Ritchie", "Bjarne Stroustrup"],
    correct: "Charles Babbage",
  },
  {
    id: "1",
    question: "Which of the following is the correct abbreviation of COMPUTER?",
    options: ["Commonly Occupied Machines Used in Technical and Educational Research", "Commonly Operated Machines Used in Technical and Environmental Research", "Commonly Oriented Machines Used in Technical and Educational Research", "Commonly Operated Machines Used in Technical and Educational Research"],
    correct: "Commonly Operated Machines Used in Technical and Educational Research",
  },
  {
    id: "2",
    question: "Which of the following is the correct definition of Computer?",
    options: ["Computer is a machine or device that can be programmed to perform arithmetical or logic operation sequences automatically", "Computer understands only binary language which is written in the form of 0s & 1s", "Computer is a programmable electronic device that stores, retrieves, and processes the data", "All of the mentioned"],
    correct: "All of the mentioned",
  },
  {
    id: "3",
    question: "What is the full form of CPU?",
    options: ["Computer Processing Unit", "Computer Principle Unit", "Central Processing Unit", "Control Processing Unit"],
    correct: "Central Processing Unit",
  },
  {
    id: "4",
    question: "Which of the following language does the computer understand?",
    options: ["Computer understands only C Language", "Computer understands only Assembly Language", "Computer understands only Binary Language", "Computer understands only BASIC"],
    correct: "Computer understands only Binary Language",
  },
  {
    id: "5",
    question: "Which of the following computer language is written in binary codes only?",
    options: ["pascal", "machine language", "C", "C#"],
    correct: "machine language",
  },
  {
    id: "6",
    question: "Which of the following is the brain of the computer?",
    options: ["Central Processing Unit", "Memory", " Arithmetic and Logic unit", "Control unit"],
    correct: "Central Processing Unit",
  },
  {
    id: "7",
    question: "Which of the following is not a characteristic of a computer?",
    options: ["Versatility", "Accuracy", "Diligence", "I.Q."],
    correct: "I.Q.",
  },
  {
    id: "8",
    question: "Which of the following is the smallest unit of data in a computer?",
    options: ["Bit", "KB", "Nibble", "Byte"],
    correct: "Bit",
  },
  {
    id: "9",
    question: "Which of the following unit is responsible for converting the data received from the user into a computer understandable format?",
    options: ["Output Unit", "Input Unit", "Memory Unit", " Arithmetic & Logic Unit"],
    correct: "Input Unit",
  },
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
