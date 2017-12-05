// Trivia Game turned Name That Tune!

var gameSongs = [{
    song: "assets/audio/andy_griffith-t.mp3",
    choices: ["Happy Days", "I Love Lucy", "Gomer Pyle", "The Andy Griffith Show"],
    correctAnswer: "D",
    image: "assets/images/andy-griffith-img.jpg"
}, {
    song: "assets/audio/mash-t.mp3",
    choices: ["Hill Street Blues", "M.A.S.H.", "Taxi", "A-Team"],
    correctAnswer: "B",
    image: "assets/images/mash-img.jpg"
}, {
    song: "assets/audio/mad_men-t.mp3",
    choices: ["Mad Men", "Orange is the New Black", "Sons of Anarchy", "Dr. Who"],
    correctAnswer: "A",
    image: "assets/images/mad-men-img.jpg"
}, {
    song: "assets/audio/threes_company-t.mp3",
    choices: ["Diff'rent Strokes", "Bosom Buddies", "Three's Company", "Love Boat"],
    correctAnswer: "C",
    image: "assets/images/threes-company-img.jpg"
}, {
    song: "assets/audio/king_of_the_hill-t.mp3",
    choices: ["Sanford & Son", "Reba", "The Simpsons", "King of the Hill"],
    correctAnswer: "D",
    image: "assets/images/king-of-the-hill-img.jpg"
}, {
    song: "assets/audio/knightrider-t.mp3",
    choices: ["Hawaii 5-0", "Knight Rider", "Battlestar Galactica", "Airwolf"],
    correctAnswer: "B",
    image: "assets/images/knight-rider-img.jpg"
}, {
    song: "assets/audio/breaking_bad-t.mp3",
    choices: ["Better Call Saul", "The Americans", "Seinfeld", "Breaking Bad"],
    correctAnswer: "D",
    image: "assets/images/breaking-bad-img.jpg"
}, {
    song: "assets/audio/magnum_tune-t.mp3",
    choices: ["Magnum P.I.", "Alf", "Simon & Simon", "The Facts of Life"],
    correctAnswer: "A",
    image: "assets/images/magnum-pi-img.jpg"
}, {
    song: "assets/audio/beverley_hillbillies-t.mp3",
    choices: ["Lavern & Shirley", "Green Acres", "The Beverly Hillbillies", "Jeb's Po' Fam'ly"],
    correctAnswer: "C",
    image: "assets/images/beverly-hillbillies-img.jpg"
}, {
    song: "assets/audio/the_walking_dead-t.mp3",
    choices: ["Fear the Walking Dead", "Dexter", "Game of Thrones", "The Walking Dead"],
    correctAnswer: "D",
    image: "assets/images/walking-dead-img.jpg"

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
        $("#timer").show();
        count = 11;
        counter = setInterval(timer, 1000);

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

        } else {
            displayGameResults();
        }
    }

    function getQuestion() {
        console.log("getQuestion function running");
        $("#display").empty();
        //Sound effect
        songClip = document.createElement("audio");
        songClip.setAttribute("src", gameSongs[i].song);
        songClip.play();
        //$("#display").addClass("questionStyle").append('<div>' + gameSongs[i].question + '</div>');
        $("#display").append('<div class="possibleAnswer" data-key="A">' + gameSongs[i].choices[0] + '</div>');
        $("#display").append('<div class="possibleAnswer" data-key="B">' + gameSongs[i].choices[1] + '</div>');
        $("#display").append('<div class="possibleAnswer" data-key="C">' + gameSongs[i].choices[2] + '</div>');
        $("#display").append('<div class="possibleAnswer" data-key="D">' + gameSongs[i].choices[3] + '</div>');
        console.log("ran thru 1 iteration of gameSongs");

    };

    $(document).on("click", ".possibleAnswer", function() {
        songClip.setAttribute("src", "");
        var userGuess = $(this).attr('data-key');
        if (userGuess === gameSongs[i].correctAnswer) {
            console.log("u just clicked an answer");
            console.log("correct answer");
            right++;
            clearInterval(counter);
            userCorrect();
        } else {
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
            $("#display").html('<div class="message">Too slow!</div>');
            $("#display").append('<div class="message">Gotta think quick! Here comes the next clip...</div>');
            $("#display").append('<img id="answerImg" src=' + gameSongs[i].image + ' />');

            unanswered++;
            setTimeout(timerNextQ, 5000);
        } else {
            $("#display").html('<div>Too slow!</div>' +
                '<div class="message">Game Over!</div>' + '<div class="message">Here come your results...</div>');
            $("#display").append('<img id="answerImg" src=' + gameSongs[i].image + ' />');
            unanswered++;
            setTimeout(timerNextQ, 5000);
        }

    };

    function userCorrect() {
        $("#timer").hide();
        if (i < 9) {
            $("#display").html('<div class="message">Correct!</div>' +
                '<div class="message">Here comes the next clip...</div>');
            $("#display").append('<img id="answerImg" src=' + gameSongs[i].image + ' />');
            setTimeout(timerNextQ, 5000);
        } else {
            $("#display").html('<div class="message">Correct!</div>' +
                '<div class="message">Game Over!</div>' + '<div class="message">Here come your results...</div>');
            $("#display").append('<img id="answerImg" src=' + gameSongs[i].image + ' />');
            setTimeout(timerNextQ, 5000);
        }
    };

    function userWrong() {
        $("#timer").hide();
        if (i < 9) {
            $("#display").html('<div class="message">Wrong!</div>' +
                '<div class="message">Keep trying! Here comes the next clip...</div>');
            $("#display").append('<img id="answerImg" src=' + gameSongs[i].image + ' />');
            setTimeout(timerNextQ, 5000);
        } else {
            $("#display").html('<div class="message">Wrong!</div>' +
                '<div class="message">Game Over!</div>' + '<div class="message">Here come your results...</div>');
            $("#display").append('<img id="answerImg" src=' + gameSongs[i].image + ' />');
            setTimeout(timerNextQ, 5000);
        }
    };

    function displayGameResults() {
        $("#timer").hide();
        if (right > wrong && unanswered) {
            $("#display").html('<div class="message">Nice work!</div>');
            $("#display").append(
                '<div class="message">Correct Answers: ' + right + '</div>' +
                '<div class="message">Incorrect Answers: ' + wrong + '</div>' +
                '<div class="message">Unanswered Questions: ' + unanswered + '</div>');
            playAgain();
        } else if (right <= wrong) {
            $("#display").html('<div class="message">No so great...</div>');
            $("#display").append(
                '<div class="message">Correct Answers: ' + right + '</div>' +
                '<div class="message">Incorrect Answers: ' + wrong + '</div>' +
                '<div class="message">Unanswered Questions: ' + unanswered + '</div>');
            playAgain();
        }


    };

    function playAgain() {
        $("#display").append('<button id="playAgain">Play Again!</button>');
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