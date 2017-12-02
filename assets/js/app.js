// Trivia Game

    var triviaQs = [{
	 	song: "assets/audio/andy_griffin-t.mp3",
    choices: ["Happy Days", "I Love Lucy", "Gomer Pyle", "The Andy Griffith Show"],
	 	correctAnswer: "D"
	},{
    song: "assets/audio/mash-t.mp3",
	 	choices: ["Hill Street Blues", "M.A.S.H.", "Taxi", "A-Team"],
	 	correctAnswer: "B"
	},{
    song: "assets/audio/mad_men-t.mp3",
	 	choices: ["Mad Men", "Orange is the New Black", "Sons of Anarchy", "Dr. Who"],
	 	correctAnswer: "A"
	},{
    song: "assets/audio/threes_company-t.mp3",
	 	choices: ["Diff'rent Strokes", "Bosom Buddies", "Three's Company", "Love Boat"],
	 	correctAnswer: "C"	 	
	},{
    song: "assets/audio/king_of_the_hill-t.mp3",
    choices: ["Sanford & Son", "Reba", "The Simpsons", "King of the Hill"],
    correctAnswer: "D"    
  },{
    song: "assets/audio/knightrider-t.mp3",
    choices: ["Hawaii 5-0", "Knight Rider", "Battlestar Galactica", "Airwolf"],
    correctAnswer: "B"    
  },{
    song: "assets/audio/breaking_bad-t.mp3",
    choices: ["Better Call Saul", "The Americans", "Seinfeld", "Breaking Bad"],
    correctAnswer: "D"    
  },{
    song: "assets/audio/magnum_tune-t.mp3",
    choices: ["Magnum P.I.", "Alf", "Simon & Simon", "The Facts of Life"],
    correctAnswer: "A"    
  },{
    song: "assets/audio/beverley_hillbillies-t.mp3",
    choices: ["Lavern & Shirley", "Green Acres", "The Beverly Hillbillies", "Jeb's Po' Fam'ly"],
    correctAnswer: "C"    
  },{
    song: "assets/audio/the_walking_dead-t.mp3",
    choices: ["Fear the Walking Dead", "Dexter", "Game of Thrones", "The Walking Dead"],
    correctAnswer: "D"    
  }];

var i = 0;
var right = 0;
var wrong = 0;
var unanswered = 0;
var counter = 10;
var songClip;

$(document).ready(function() {

  $("#display").html("<div>Be sharp! You'll only hear a 10 second clip.</div>" +
    '<div>Select your answer before the clip ends!</div>' + 
    '<button id="buttonStart">START</button>');

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
    if (i <= 9) {
      $("#timer").html("Time Remaining: 10");
      startTimer15();
      getQuestion();
      
    }else {
      displayGameResults();
    }
  }
            //trim my songs to 9 secs and make timer 10 sec. Still include .stop();

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
    $("#timer").hide();
    if (i < 9) {
      $("#display").html('<div>Too slow!</div>' +
      '<div>Gotta think quick! Here comes the next clip...</div>');
    unanswered++;
    setTimeout(timerNextQ, 5000);
  }else {
    $("#display").html('<div>Too slow!</div>' +
      '<div>Game Over!</div>' +  '<div>Here come your results...</div>');
    unanswered++;
    setTimeout(timerNextQ, 5000);
  }
    
  };

  function userCorrect() {
    $("#timer").hide();
    if (i < 9) {
    $("#display").html('<div>Correct!</div>' +
      '<div>Here comes the next clip...</div>');
    setTimeout(timerNextQ, 5000);
    }else {
    $("#display").html('<div>Correct!</div>' +
      '<div>Game Over!</div>' +  '<div>Here come your results...</div>');
    setTimeout(timerNextQ, 5000);
  }
  };

  function userWrong() {
    $("#timer").hide();
    if (i < 9) {
    $("#display").html('<div>Wrong!</div>' +
      '<div>Keep trying! Here comes the next clip...</div>');
    setTimeout(timerNextQ, 5000);
    }else {
    $("#display").html('<div>Wrong!</div>' +
      '<div>Game Over!</div>' +  '<div>Here come your results...</div>');
    setTimeout(timerNextQ, 5000);
  }
  };

  function displayGameResults () {
    $("#timer").hide();
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

    

