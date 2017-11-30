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
var unanswered = 0;
var counter;

$(document).ready(function() {

  $("#display").html('<button id="buttonStart">START</button>');

  $("#buttonStart").on("click", function() {
    console.log("you clicked start");
    $("#buttonStart").hide();
    getQuestion();
    startTimer15();
  });

  function startTimer15() {
        var count = 9;
        counter = setInterval(timer, 1000); //1000 will  run it every 1 second
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
    $("#display").append('<div class="possibleAnswer" data="A">' + triviaQs[i].choices[0] + '</div>');
    $("#display").append('<div class="possibleAnswer" data="B">' + triviaQs[i].choices[1] + '</div>');
    $("#display").append('<div class="possibleAnswer" data="C">' + triviaQs[i].choices[2] + '</div>');
    $("#display").append('<div class="possibleAnswer" data="D">' + triviaQs[i].choices[3] + '</div>');
    console.log("ran thru 1 iteration of triviaQs");
    
    i++; //iterate to next question
  };

  // $("html").on("click", function() {
    
  //       console.log("correct answer");
       
  //   });

  $(document).on("click", ".possibleAnswer", function() {
      if (this.data === triviaQs[i].correctAnswer) {
        console.log("u just clicked an answer");
        console.log("correct answer");
        right++;
        clearInterval(counter);
        userCorrect();
      }else {
       console.log("u just clicked an answer");
       console.log("wrong answer");
       wrong++;
       clearInterval(counter);
       userWrong();
      }
    });

  function timeRanOut() {
    console.log("function timeRanOut is running");
    $("#display").html("Time ran out!");
    unanswered++;
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
    if (right > wrong && unanswered) {
       $("#display").html('<div>Nice work!</div>');
      $("#display").append(
       '<div>Correct Answers: ' + right + '</div>' +
       '<div>Incorrect Answers: ' + wrong + '</div>' +
       '<div>Unanswered Questions: ' + unanswered + '</div>');
    }else if (right <= wrong) {
       $("#display").html('<div>No so great...</div>');
       $("#display").append(
       '<div>Correct Answers: ' + right + '</div>' +
       '<div>Incorrect Answers: ' + wrong + '</div>' +
       '<div>Unanswered Questions: ' + unanswered + '</div>');
    }

    };
  

});   

    

