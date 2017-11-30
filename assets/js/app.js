// Trivia Game

    var triviaQuestions = [{
	 	question: "What was Yesterday?",
	 	choices: ["Monday", "Tuesday", "A Song", "Sunday"],
	 	correctAnswer: 0,
	 	name: "Q0"
	},
	{
	 	question: "What was that?",
	 	choices: ["A Ghost", "Huh?", "Where?", "A Gnat"],
	 	correctAnswer: 1,
	 	name: "Q1"
	},
	{
	 	question: "What was what?",
	 	choices: ["A Ghost", "Huh?", "Where?", "A Gnat"],
	 	correctAnswer: 2,
	 	name: "Q2"
	},
	{
	 	question: "Which is a fruit?",
	 	choices: ["Purple", "Marinara", "Vegetable", "Molasses"],
	 	correctAnswer: 3,
	 	name: "Q3"	 	
	}];


    var userAnswer;
    var correctAnswers;
    var incorrectAnswers;
    var i = 0;

$(document).ready(function() {

	function startTimer() {
        var count = 11;
        var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
        function timer() {
            count--;
            if (count < 0) {
                clearInterval(counter);
                //counter ended, do something here
               // gameResults();
               checkAnswers();
            };
            $("#timer").html("Time Remaining: " + count);
            
        };
    };

   function gameStart() {
   	$("#buttonSubmit").hide();
        $("#buttonStart").on("click", function() {
        	console.log("start button fired");
            $("#buttonStart").hide();
            $("#buttonSubmit").show();
            layoutQuestions();


        });
    };


   function layoutQuestions() {
    	for (var i = 0; i < triviaQuestions.length; i++) {
    		$("#display").addClass("questionStyle").append("<div>" + triviaQuestions[i].question + "</div>");
    		$("#display").append(
    		'<input type="radio" name="' + triviaQuestions[i].name + '" value="A" class="options">' + triviaQuestions[i].choices[0] + '</input>' +
    		'<input type="radio" name="' + triviaQuestions[i].name + '" value="B" class="options">' + triviaQuestions[i].choices[1] + '</input>' +
    		'<input type="radio" name="' + triviaQuestions[i].name + '" value="C" class="options">' + triviaQuestions[i].choices[2] + '</input>' +
    		'<input type="radio" name="' + triviaQuestions[i].name + '" value="D" class="options">' + triviaQuestions[i].choices[3] + '</input>');
    		
    	};
    	$("#timer").show();
    	startTimer();
    	//getAnswers();
    };

 //    function makeGuess(){
	// if ($(this).data("choice") == currentQuestion.correctAnswer){
	// 	numberRight++;
	// 	showResult("Correct!", "correctResult");
	// } else {
	// 	numberWrong++;
	// 	showResult("Wrong. The correct answer was " + currentQuestion.answers[currentQuestion.correctAnswer], "wrongResult");
	// }
	// };

  
  // userAnswer = $('input:radio:checked').val(); 
  //           checkAnswers(userAnswer);


  // var movie = $("#movie-input").val();
          //movies.push($("#movie-input").val());



function checkAnswers() {
$.each($("input[name='Q0']:checked"), function() {
      if ($('input:radio:checked').val() === triviaQuestions[0].correctAnswer) {
      	console.log("correct answer");
        correctAnswers++;
      }
      else {
        incorrectAnswers++;
        console.log("incorrect answer");
      }
    });

$.each($("input[name='Q1']:checked"), function() {
      if ($(this).val() === triviaQuestions[1].correctAnswer) {
        correctAnswers++;
      }
      else {
        incorrectAnswers++;
      }
    });

$.each($("input[name='Q2']:checked"), function() {
      if ($(this).val() === triviaQuestions[2].correctAnswer) {
        correctAnswers++;
      }
      else {
        incorrectAnswers++;
      }
    });

$.each($("input[name='Q3']:checked"), function() {
      if ($(this).val() === triviaQuestions[3].correctAnswer) {
        correctAnswers++;
      }
      else {
        incorrectAnswers++;
      }
    });
//gameResults();
};

    function gameResults() {
        $("#timer").hide();
        $("#buttonSubmit").hide();
        $("#display").html("Correct Answers: " + correctAnswers);
        $("#display").append("Wrong Answers: " + incorrectAnswers);
        $("#buttonStart").show();
        //$("#buttonSubmit").show();
    };

    $("#buttonSubmit").on("click", function() {
    	console.log("submit-you finished b4 time ran out");
    	//stop timer@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@do this
         $("#buttonSubmit").hide();
         checkAnswers(); 
         gameResults();
        }); //end click function

gameStart();

});
