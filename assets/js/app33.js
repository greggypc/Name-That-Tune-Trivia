// Trivia Game


    var triviaQs = [{
	 	question: "What was Yesterday?",
	 	choices: ["Monday", "Tuesday", "A Song", "Sunday"],
	 	name: "Q0",
    correctAnswer: "C"
	},
	{
	 	question: "What was that?",
	 	choices: ["A Ghost", "Huh?", "Where?", "A Gnat"],
	 	name: "Q1"
	},
	{
	 	question: "What was what?",
	 	choices: ["A Ghost", "Huh?", "Where?", "A Gnat"],
	 	name: "Q2"
	},
	{
	 	question: "Which is a fruit?",
	 	choices: ["Purple", "Marinara", "Vegetable", "Apple"],
	 	name: "Q3"	 	
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
  });

  function startTimer15() {
        var count = 16;
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

  function startTimer6() {
        var count = 3;
        var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
        function timer() {
            count--;
            if (count < 1) {
                clearInterval(counter);
                //counter ended, do something here
                console.log("next question coming!");
                getQuestion();
            };
        $("#timer").html("Next question in " + count + " seconds!");   
        };
  };

  function getQuestion() {
    console.log("getQuestion function running");
    $("#display").empty();   
    $("#display").addClass("questionStyle").append("<div>" + triviaQs[i].question + "</div>");
    $("#display").append(
    '<div class="possibleAnswer" data-key="A">' + triviaQs[i].choices[0] + '</div>' +
    '<div class="possibleAnswer" data-key="B">' + triviaQs[i].choices[1] + '</div>' +
    '<div class="possibleAnswer" data-key="C">' + triviaQs[i].choices[2] + '</div>' +
    '<div class="possibleAnswer" data-key="D">' + triviaQs[i].choices[3] + '</div>');
    console.log("ran thru 1 iteration of triviaQs");
    startTimer15();
    $(".possibleAnswer").on("click", function() {
      if (this.data-key === triviaQs[i].correctAnswer) {
        console.log("correct answer");
        right++;
        userCorrect();
      }
    });


      i++; //iterate to next question
  };

  function timeRanOut() {
    console.log("function timeRanOut is running");
    startTimer6();
  };

  function userCorrect() {
    console.log("function userCorrect is running");
    startTimer6();
  };

  function userWrong() {
    console.log("function userWrong is running");
    startTimer6();
  };

     
    // function gameStart() {
    //     $("#buttonStart").on("click", function() {
    //     	console.log("start button fired");
    //         $("#buttonStart").hide();
    //         layoutQuestions();

    //     });
    // };

// $.each($("input[name='Q0']:checked"), function() {
//       if ($(this).val() === triviaQuestions[0].correctAnswer) {
//         correctAnswers++;
//       }
//       else {
//         incorrectAnswers++;
//       }
//     });

    
});
