// Trivia Game

    var triviaQs = [{
	 	song: "assets/audio/trim/andy_griffin-t.mp3",
    question: "What was Yesterday?",
	 	choices: ["Monday", "Tuesday", "A Song", "Sunday"],
	 	correctAnswer: "C"
	},
	{
    song: "assets/audio/trim/mash-t.mp3",
	 	question: "Which is usually is green?",
	 	choices: ["The street", "The sky", "Grass", "Basketball"],
	 	correctAnswer: "C"
	},
	{
    song: "assets/audio/trim/mad_men-t.mp3",
	 	question: "What was last October?",
	 	choices: ["The past", "The Future", "The Present", "Tomorrow"],
	 	correctAnswer: "A"
	},
	{
    song: "assets/audio/kill_bill_trimmed.mp3",
	 	question: "Which is a fruit?",
	 	choices: ["Purple", "Marinara", "Vegetable", "Apple"],
	 	correctAnswer: "D"	 	
	}];

var i = 0;
var right = 0;
var wrong = 0;
var unanswered = 0;
var counter = 10;
var songClip;

$(document).ready(function() {

  $("#display").html('<button id="buttonStart">START</button>');

  $("#buttonStart").on("click", function() {
    console.log("you clicked start");
    $("#buttonStart").hide();
    getQuestion();
    startTimer15();
  });

  function startTimer15() {
        count = 11;
        counter = setInterval(timer, 1000); //1000 will  run it every 1 second
        function timer() {
            
            count--;
            $("#timer").html("Time Remaining: " + count); 
            if (count < 1) {
                clearInterval(counter);
                //counter ended, do something here
                console.log("time ran out!");
                timeRanOut();
            };
           
        };
  };

  function timerNextQ() {
    i++; //iterate to next question
    if (i <= 3) {
      $("#timer").html("Time Remaining: 10");
      startTimer15();
      getQuestion();
      
    }else {
      displayGameResults();
    }
  }
            //trim my songs to 9 secs and make timer 10 sec. Still include .stop();

            // // Sound effect
            // var songClip = document.createElement("audio");
            // openingTheme.setAttribute("src", "assets/audio/kill_bill_trimmed.mp3");
            // openingTheme.play();

            // Sound effect
            // var songClip = document.createElement("audio");
            // songClip.setAttribute("src", triviaQs[i].song);
            // songClip.play();

            //timer runs out songclip.stop();

  function getQuestion() {
    console.log("getQuestion function running");
    $("#display").empty();
    //Sound effect
    songClip = document.createElement("audio");
    songClip.setAttribute("src", triviaQs[i].song);
    songClip.play();
    //$("#display").addClass("questionStyle").append('<div>' + triviaQs[i].question + '</div>');
    $("#display").append('<div class="possibleAnswer" data-key="A">' + triviaQs[i].choices[0] + '</div>');
    $("#display").append('<div class="possibleAnswer" data-key="B">' + triviaQs[i].choices[1] + '</div>');
    $("#display").append('<div class="possibleAnswer" data-key="C">' + triviaQs[i].choices[2] + '</div>');
    $("#display").append('<div class="possibleAnswer" data-key="D">' + triviaQs[i].choices[3] + '</div>');
    console.log("ran thru 1 iteration of triviaQs");
    
    
  };

  // $("html").on("click", function() {
    
  //       console.log("correct answer");
       
  //   });

  //var guess = $(this).attr('data-key');

  $(document).on("click", ".possibleAnswer", function() {
    songClip.setAttribute("src", "");
    var userGuess = $(this).attr('data-key');
      if (userGuess === triviaQs[i].correctAnswer) {
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
    $("#display").html('<div>Too slow!</div>' +
      '<div>Gotta think quick! Here comes the next clip...</div>');
    unanswered++;
    setTimeout(timerNextQ, 5000);
  };

  function userCorrect() {
    console.log("function userCorrect is running");
    $("#display").html('<div>Correct!</div>' +
      '<div>Here comes the next clip...</div>');
    setTimeout(timerNextQ, 5000);
  };

  function userWrong() {
    console.log("function userWrong is running");
    $("#display").html('<div>Wrong!</div>' +
      '<div>Keep trying! Here comes the next clip...</div>');
    setTimeout(timerNextQ, 5000);
  };

  function displayGameResults () {
    if (right > wrong && unanswered) {
       $("#display").html('<div>Nice work!</div>');
      $("#display").append(
       '<div>Correct Answers: ' + right + '</div>' +
       '<div>Incorrect Answers: ' + wrong + '</div>' +
       '<div>Unanswered Questions: ' + unanswered + '</div>');
       playAgain();
    }else if (right <= wrong) {
       $("#display").html('<div>No so great...</div>');
       $("#display").append(
       '<div>Correct Answers: ' + right + '</div>' +
       '<div>Incorrect Answers: ' + wrong + '</div>' +
       '<div>Unanswered Questions: ' + unanswered + '</div>');
       playAgain();
      }


    };

    function playAgain() {
      $("#display").append('<button>Play Again!</button>');
      $("button").on("click", function() {
      right = 0;
      wrong = 0;
      unanswered = 0;
      i = 0;
      console.log("you clicked play again");
      $("button").hide();
      getQuestion();
      startTimer15();
      });
    };
  

});   

    

