
//here I declare the questions, along with the answer choices and the answer key
const myQuestions = [
    {
      question: "What type of result is expected when the === operator is used?",
      answers: {
        a: "document",
        b: "an object",
        c: "a string",
        d: "true/false"
      },
      correctAnswer: "d"
    },
    {
      question: "Which one of these is a NOT a JavaScript data type?",
      answers: {
        a: "number",
        b: "boolean",
        c: "font-family",
        d: "object"
      },
      correctAnswer: "c"
    },
    {
      question: "Which is not a loop type in JS?",
      answers: {
        a: "go-until",
        b: "while",
        c: "do-while",
        d: "for"
      },
      correctAnswer: "a"
    },
    {
        question: "What is the index value of the second item in a list?",
        answers: {
          a: "0",
          b: "1",
          c: "2",
          d: "3"
        },
        correctAnswer: "b"
    },
    {
    question: "What is the correct place to insert a JavaScript?",
    answers: {
      a: "head",
      b: "body",
      c: "a and b",
      d: "footer"
    },
    correctAnswer: "c"
    }
  ];

  var opening = "HELLO! Welcome to Matthew's Javascript Quiz! When ready, please click the start button to begin the quiz. You will have 75 seconds to finish. You lose 10 seconds for a wrong answer, please finish as fast as you can, as the remaining time is your final score."

  var timerEl = document.getElementById("timer");
  var questionEl = document.getElementById("question");



  function init(){

    timerEl.innerHTML = 75;
    questionEl.innerHTML = opening;

  }

  init();


