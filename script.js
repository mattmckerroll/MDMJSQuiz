
//here I declare the questions, along with the answer choices and the answer key
var myQuestions = [
    {
        question: "What type of result is expected when the === operator is used?",
        a: "document",
        b: "an object",
        c: "a string",
        d: "true/false",
        correctAnswer: "d"
    },
    {
        question: "Which one of these is a NOT a JavaScript data type?",
        a: "number",
        b: "boolean",
        c: "font-family",
        d: "object",
        correctAnswer: "c"
    },
    {
        question: "Which is not a loop type in JS?",
        a: "go-until",
        b: "while",
        c: "do-while",
        d: "for",
        correctAnswer: "a"
    },
    {
        question: "What is the index value of the second item in a list?",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        correctAnswer: "b"
    },
    {
        question: "What is the correct place to insert a JavaScript script tag?",
        a: "head",
        b: "body",
        c: "a and b",
        d: "footer",
        correctAnswer: "c"
    }
  ];

  var opening = "HELLO! Welcome to Matthew's Javascript Quiz! When ready, please click the start button to begin the quiz. You will have 75 seconds to finish. You lose 10 seconds for a wrong answer, please finish as fast as you can, as the remaining time is your final score."

  var timerEl = document.getElementById("timer");
  var questionEl = document.getElementById("question");
  var time = 75;
  var answersEl = document.getElementById("answers");
  var pos = -1;
  var scoreboard = [];
//initializes the page and sets things up for the test
  function init(){

    //display starting amount of time and show opening text
    timerEl.innerHTML = time;
    questionEl.innerHTML = opening;

    //create start button, start test on click
    var button = document.createElement("button");
    button.textContent = "START!";
    button.setAttribute("class","button");
    button.setAttribute("id", "startBtn")
    answersEl.appendChild(button);
       
  }

  answersEl.addEventListener("click", function(event) {
    event.preventDefault();
    //if the start button is clicked, start the timer, and render the next question.
    if(event.target.matches("#startBtn")) {

        renderQuestions();
    }
    else{ 
        if (event.target.dataset.ans === myQuestions[pos].correctAnswer) {
        renderQuestions();
        qResult = document.getElementById("answerResult")
        qResult.innerHTML = "CORRECT!"  
           
        }
        else{
        time = time -10;
        renderQuestions();
        qResult = document.getElementById("answerResult")
        qResult.innerHTML = "WRONG!"
        
        }
    }
  });



  //this function renders the questions
  function renderQuestions(){
    
    
    if(pos >= myQuestions.length -1){
        //if the pos  is higher than the number of questions go to highscore page and stop the timer
        clearInterval(intervaltimer);
        highScores(time);
        return;
    }
    else{
        console.log(pos)
        pos++;
        questionEl.innerHTML = myQuestions[pos].question;
        if (pos === 0) {
            var intervaltimer;
            intervaltimer = setInterval(scoreTimer, 1000);
        }
    }
    
    
    
    console.log(pos)
    console.log("did it work?");
    answersEl.innerHTML = "";           //clears the answer area


    //here  i construct the answer buttons for every question.
    var chA = document.createElement("button");
    chA.textContent = myQuestions[pos].a;
    chA.setAttribute("class","button");
    chA.setAttribute("data-ans", "a")
    answersEl.appendChild(chA);

    var chB = document.createElement("button");
    chB.textContent = myQuestions[pos].b;
    chB.setAttribute("class","button");
    chB.setAttribute("data-ans", "b")
    answersEl.appendChild(chB);

    var chC = document.createElement("button");
    chC.textContent = myQuestions[pos].c;
    chC.setAttribute("class","button");
    chC.setAttribute("data-ans", "c")
    answersEl.appendChild(chC);

    var chD = document.createElement("button"); 
    chD.textContent = myQuestions[pos].d;
    chD.setAttribute("class","button");
    chD.setAttribute("data-ans", "d")
    answersEl.appendChild(chD);
  }

  function highScores(finalScore){
    
    //clearing the answers area and the text that checks if you get it right 
    
    
    
    answersEl.innerHTML = "";
    
    
    document.getElementById("answerResult").innerHTML = "";
    questionEl.innerHTML = "";
    questionEl.innerHTML = "please enter your initials below to record your score which is: " + finalScore;

    //constructing the form here
    var form = document.createElement("form");
    var formel = document.getElementById("formEntry");
    form.setAttribute("method", "POST");
    form.setAttribute("id", "form");

    //here is where the user actually enters the name info
    var inputArea = document.createElement("input")
    form.appendChild(inputArea);
    formel.appendChild(form);

    
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        //do nothing if theres no scorename
        if (scorename === "") {
            return            
        }
        
        var storedScores = JSON.parse(localStorage.getItem("highScores"));
        if (storedScores !== null) {
            scoreboard = storedScores
        }

        var scorename = inputArea.value;

        //storing the high scores here
        const highScores = {
            score: time,
            name: scorename
        };
        scoreboard.push(highScores)

        for (var i = 0; i < scoreboard.length; i++) {
            var singlescore = scoreboard[i];
        
            var li = document.createElement("li");
            li.textContent = "name: " + singlescore.name + " Score:" + singlescore.score;
            li.setAttribute("data-index", i);
            
            highscoreEl = document.getElementById("highscores");

        
            
            highscoreEl.appendChild(li);
          }

        console.log(highScores);
        console.log(scoreboard);

        document.getElementById("answerResult").innerHTML = "";
        
        
        


  
        document.getElementById("highscores")



     
     
        console.log(scorename + "<-scorename time->"+time)
      

});


      
   
}





//this function tracks the time/score and places it on the page.
  function scoreTimer(){
      timerEl.innerHTML = time;
      console.log(time);
      
      //this makes sure the time (score) never goes negative.
      if (time <= 0) {
          time = 0;          
      }
      else{ 
          time = time -1;
          console.log(time);
      }
  }

//initialize the page! 
  init();




