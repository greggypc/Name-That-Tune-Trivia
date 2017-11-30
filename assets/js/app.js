// Trivia Game

    var triviaQs = [{
	 	question: "What was Yesterday?",
	 	choices: ["Monday", "Tuesday", "A Song", "Sunday"],
	 	correctAnswer: "C"
	},
	{
	 	question: "Which is usually is green?",
	 	choices: ["The street", "The sky", "Grass", "Basketball"],
	 	correctAnswer: "C"
	},
	{
	 	question: "What was last October?",
	 	choices: ["The past", "The Future", "The Present", "Tomorrow"],
	 	correctAnswer: "A"
	},
	{
	 	question: "Which is a fruit?",
	 	choices: ["Purple", "Marinara", "Vegetable", "Apple"],
	 	correctAnswer: "D"	 	
	}];

var i = 0;
var right = 0;
var wrong = 0;

$(document).ready(function() {

  $("#display").html('<button id="buttonStart">START</button>');

  $("#buttonStart").on("click", function() {
    console.log("you clicked start");
    $("#buttonStart").hide();
    getQuestion();
    startTimer15();
  });

  function startTimer15() {
        var count = 5;
        var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
        function timer() {
            count--;
            if (count < 1) {
                clearInterval(counter);
                //counter ended, do something here
                console.log("time ran out!");
                timeRanOut();
            };
        $("#timer").html("Time Remaining: " + count);    
        };
  };

  function timerNextQ() {
    if (i < 4) {
      getQuestion();
      startTimer15();
    }else {
      displayGameResults();
    }
  }

  function getQuestion() {
    console.log("getQuestion function running");
    $("#display").empty();
    $("#display").addClass("questionStyle").append('<div>' + triviaQs[i].question + '</div>');
    $("#display").append(
    '<div class="possibleAnswer" data-key="A">' + triviaQs[i].choices[0] + '</div>' +
    '<div class="possibleAnswer" data-key="B">' + triviaQs[i].choices[1] + '</div>' +
    '<div class="possibleAnswer" data-key="C">' + triviaQs[i].choices[2] + '</div>' +
    '<div class="possibleAnswer" data-key="D">' + triviaQs[i].choices[3] + '</div>');
    console.log("ran thru 1 iteration of triviaQs");
    
    i++; //iterate to next question
  };

  $(".possibleAnswer").on("click", function() {
      if (this.data === triviaQs[i].correctAnswer) {
        console.log("u just clicked an answer");
        console.log("correct answer");
        right++;
        //clearInterval(counter);
        userCorrect();
      }else {
        console.log("wrong answer");
        wrong++;
        //clearInterval(counter);
        userWrong();
      }
    });

  function timeRanOut() {
    console.log("function timeRanOut is running");
    $("#display").html("Time ran out!");
    setTimeout(timerNextQ, 5000);
  };

  function userCorrect() {
    console.log("function userCorrect is running");
    $("#display").html("You are correct!");
    setTimeout(timerNextQ, 5000);
  };

  function userWrong() {
    console.log("function userWrong is running");
    $("#display").html("You are incorrect!");
    setTimeout(timerNextQ, 5000);
  };

  function displayGameResults () {
    if (right > wrong) {
       $("#display").html("Nice work!");
       $("#display").append("Correct Answers: " + right);
       $("#display").append("Incorrect Answers: " + wrong);
    }else if (right <= wrong) {
       $("#display").html("No so great...");
       $("#display").append("Correct Answers: " + right);
       $("#display").append("Incorrect Answers: " + wrong);
    }

    }
  

});   

    

