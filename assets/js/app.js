// Trivia Game

$(document).ready(function() {

const questions = [
	["1 + 1 ", "1", "2", "3", "4", "B"],
	["1 + 2 ", "1", "2", "3", "4", "C"],
	["1 + 3 ", "1", "2", "3", "4", "D"],
]

	
	// $("#buttonStart").on(click, function() {
	// 	beginGame();
	// });
	function startTimer() {
		var count=11;

var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

function timer() {
  count--;
  if (count < 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     gameOver();
     return;
  }

  $("#timer").html("Time Remaining: " + count);
}
	}





	function layoutQuestions() {
		for (var i = 0; i < questions.length; i++) {
			$("#display").addClass("questionStyle").append("<div>What is " + questions[i][0] + " ?</div>");
			$("#display").append(
			"<ul><li>A) " + questions[i][1] + "</li>" +
			"<li>B) " + questions[i][2] + "</li>" +
			"<li>C) " + questions[i][3] + "</li>" +
			"<li>D) " + questions[i][4] + "</li></ul>");
		};
		startTimer();
	};

	function gameOver() {
		alert("you lose!");
	};

	function gameStart() {
		$("button").on("click", function() {
			$("#buttonStart").hide();
			layoutQuestions();
		});
		
	};






// $("#buttonStart").click(function() {
// 	timerCountdown();
// });
gameStart();

});





//=======Function for "You're Right/Wrong!" div/page
// function fiveSeconds() {
//         setTimeout(function(){
//         $("#time-left").html("<h2>About 10 seconds left!</h2>");
//         console.log("10 seconds left");
//          }, 5000);
//         // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
//         // console log 10 seconds left
        
        
//       }
