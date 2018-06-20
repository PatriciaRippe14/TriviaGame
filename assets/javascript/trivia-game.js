$(document).ready(function() {
    
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }
    
    initialScreen();
    
    $("body").on("click", ".start-button", function(event){
        event.preventDefault(); 
        clickSound.play();
        generateHTML();
    
        timerWrapper();
    
    }); 
    
    $("body").on("click", ".answer", function(event){
        
        clickSound.play();
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
    
            clearInterval(theClock);
            generateWin();
        }
        else {
            clearInterval(theClock);
            generateLoss();
        }
    });
    
    $("body").on("click", ".reset-button", function(event){
        clickSound.play();
        resetGame();
    });
    
    }); 
    
    function generateLossDueToTimeOut() {
        unansweredTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 3000);
    }
    
    function generateWin() {
        correctTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 3000);
    }
    
    function generateLoss() {
        incorrectTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 3000); 
    }
    
    function generateHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
        $(".mainArea").html(gameHTML);
    }
    
    function wait() {
        if (questionCounter < 7) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
        }
        else {
            finalScreen();
        }
    }
    
    function timerWrapper() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(theClock);
                generateLossDueToTimeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function finalScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".mainArea").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        correctTally = 0;
        incorrectTally = 0;
        unansweredTally = 0;
        counter = 30;
        generateHTML();
        timerWrapper();
    }
    
    var startScreen;
    var gameHTML;
    var counter = 30;
    var questionArray = ["It was a bright day in April, and the clocks were striking thirteen.", "In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since.", "I am an invisible man. No, I am not a spook like those who haunted Edgar Allan Poe; nor am I one of your Hollywood-movie ectoplasms.", "The Nellie, a cruising yawl, swung to her anchor without a flutter of the sails, and was at rest.", "Mr. Utterson the lawyer was a man of a rugged countenance that was never lighted by a smile; cold, scanty and embarrassed in discourse; backward in sentiment; lean, long, dusty, dreary and yet somehow lovable.", " I first met Dean not long after my wife and I split up.", "Call me Ishmael.", "Ships at a distance have every man's wish on board.", "Stately, plump Buck Mulligan came from the stairhead, bearing a bowl of lather on which a mirror and a razor lay crossed.", "Alexey Fyodorovitch Karamazov was the third son of Fyodor Pavlovitch Karamazov, a landowner well known in our district in his own day, and still remembered among us owing to his gloomy and tragic death, which happened thirteen years ago, and which I shall describe in its proper place."];
    var answerArray = [["1984", "The Crucible", "Pet Cemetary", "Darwin"], ["Joy Luck Club","The Great Gatsby","Treasure Island","Grapes of Wrath"], ["The Tell Tale Heart", "A Portrait of the Artist as a Young Man", "Invisible Man", "Brave New World"], ["Catch-22","The Sound and the Fury","Heart of Darkness","To the Lighthouse"], ["Native Son", "Passage to India", "Slaughterhouse-Five", "The Strange Case of Dr. Jekyll and Mr. Hyde"], ["On the Road","The Good Soldier","Animal Farm","Howard's End"], ["Go Tell It on the Mountain", "Moby Dick", "Sister Carrie", "Deliverance"], ["Bluest Eye","Tropic of Cancer","The Naked and the Dead","Their Eyes Were Watching God"], ["The Dubliners","From Here to Eternity","Ulysses","Age of Innocence"], ["The Idiot","The Brothers Karamazov","A Clockwork Orange","A Bend in the River"]];
    var imageArray = ["<img class='center-block img-right' src='assets/images/1984.jpeg'>", "<img class='center-block img-right' src='assets/images/GreatGatsby.jpeg'>", "<img class='center-block img-right' src='assets/images/InvisibleMan.jpg'>", "<img class='center-block img-right' src='assets/images/HeartDarkness.jpg'>", "<img class='center-block img-right' src='assets/images/JekyllHyde.jpg'>", "<img class='center-block img-right' src='assets/images/OnTheRoad.jpeg'>", "<img class='center-block img-right' src='assets/images/MobyDick.jpg'>", "<img class='center-block img-right' src='assets/images/WatchingGod.jpg'>", "<img class='center-block img-right' src='assets/images/Ulysses.jpg'>", "<img class='center-block img-right' src='assets/images/Brothers.jpg'>" ];
    var correctAnswers = ["A. 1984", "B. The Great Gatsby", "C. Invisible Man", "C. Heart of Darkness", "D. The Strange Case of Dr. Jekyll and Mr. Hyde", "A. On the Road", "B. Moby Dick", "D. Their Eyes Were Watching God", "C. Ulysses", "B. The Brothers Karamazov"];
    var questionCounter = 0;
    var selecterAnswer;
    var theClock;
    var correctTally = 0;
    var incorrectTally = 0;
    var unansweredTally = 0;
    var clickSound = new Audio("assets/sounds/button-click.mp3");
    