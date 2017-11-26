// Trivia Game
$(document).ready(function() {

    const questions = [
        ["1 + 1 ", "1", "2", "3", "4", "B"],
        ["1 + 2 ", "1", "2", "3", "4", "C"],
        ["1 + 3 ", "1", "2", "3", "4", "D"],
    ]
    var userAnswer;
    var correctAnswers;
    var wrongAnswers;
    //var i;


    // $("#buttonStart").on(click, function() {
    // 	beginGame();
    // });
    function startTimer() {
        var count = 481;

        var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

        function timer() {
            count--;
            if (count < 0) {
                clearInterval(counter);
                //counter ended, do something here
                gameResults();
            };

            $("#timer").html("Time Remaining: " + count);
        };
    };





    function layoutQuestions() {
        for (var i = 0; i < questions.length; i++) {
            $("#display").addClass("questionStyle").append("<div>What is " + questions[i][0] + " ?</div>");
            $("#display").append('<div id="A" class="options">A) ' + questions[i][1] + '</div>').attr("data-questions", questions[5]);
            $("#display").append('<div id="B" class="options">B) ' + questions[i][2] + '</div>').attr("data-questions", questions[5]);
            $("#display").append('<div id="C" class="options">C) ' + questions[i][3] + '</div>').attr("data-questions", questions[5]);
            $("#display").append('<div id="D" class="options">D) ' + questions[i][4] + '</div>').attr("data-questions", questions[5]);
        };
        startTimer();
        getAnswers();

    };

    // function layoutQuestions() {
    // 	for (var i = 0; i < questions.length; i++) {
    // 		$("#display").addClass("questionStyle").append("<div>What is " + questions[i][0] + " ?</div>");
    // 		$("#display").append(
    // 		"<ul><li >A) " + questions[i][1] + "</li>" +
    // 		"<li>B) " + questions[i][2] + "</li>" +
    // 		"<li>C) " + questions[i][3] + "</li>" +
    // 		"<li>D) " + questions[i][4] + "</li></ul>");
    // 	};
    // 	startTimer();
    // 	checkAnswers();
    // };

    function getAnswers() {
    	var i = 0;
        $(".options").on("click", function() {
            userAnswer = this.id;
            checkAnswers(userAnswer , i);
        }); //end click function
    } //end function getAnswers


    function checkAnswers(userAnswer , i) {
       // for ( i = 0 ; i < questions.length; i++) {
       	
        if (userAnswer === questions[i][5]) {
            correctAnswers++;
            console.log("right answer!");
            
        } else {
            wrongAnswers++;
            console.log("wrong answer!");
        }
        i++;
      // }; //end for loop
    }; //end function checkAnswer

    function gameResults() {
        $("#display").html("Correct Answers: " + correctAnswers);
        $("#display").append("Wrong Answers: " + wrongAnswers);
        $("#buttonStart").show();
        gameStart();
    };

    function gameOver() {
        alert("you lose!");
        gameStart();
    };


    function gameStart() {

        $("button").on("click", function() {
            $("#buttonStart").hide();
            layoutQuestions();
        });

    };


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
