//Wait for the DOM to finish loading before running the game.
//Code from https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event#:~:text=The%20DOMContentLoaded%20event%20fires%20when,and%20subframes%20to%20finish%20loading. 
  document.addEventListener('DOMContentLoaded', (_event) => {
    main();
  });

// Animation duration of the border colour change.
const _ANIMATION_DURATION = 600;

// Number of rounds before game ends
//const MAX_ROUNDS = 5;

let currentUserCounter = 0;

let currentComputerCounter = 0;

// User choses number of games to play
var threeGames = getElementById("3-games").value;
var fiveGames = getElementById("5-games").value;
var sevenGames = getElementById("7-games").value;


// The choices the computer can randomly select.
const CHOICES = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

/**
 * Computer random choice is generated. 
 * Code credited to youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0". 
 * Time of video - 39:10.
 */
function getComputerChoice() {
    const randomChoice = [Math.floor(Math.random() * CHOICES.length)];
    return CHOICES[randomChoice];
}


/** 
 * user chooses how many games they want to play.
 *
 */
function gamenum() {
// Start first to 3 game
document.getElementById("threeGames").addEventListener("click", function() { 
    game ();
    gamenum = 3;
});
document.getElementById("fiveGames").addEventListener("click", function() {
    game (); 
    gamenum = 5;
});
document.getElementById("sevenGames").addEventListener("click", function() {
    game (); 
    gamenum = 7;
});
}


/**
 * User clicking each button recognised by the game.
 * Code credited to youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0".
 * Time of video - 34:35.
 */
function main() {
    document.getElementById("Rock").addEventListener("click", function() {
        game("Rock");
    });
    document.getElementById("Paper").addEventListener("click", function() {
        game("Paper");
    });

    //choices buttons
    document.getElementById("Scissors").addEventListener("click", function() {
        game("Scissors");
    });
    document.getElementById("Lizard").addEventListener("click", function() {
        game("Lizard");
    });
    document.getElementById("Spock").addEventListener("click", function() {
        game("Spock");
    });
} 

/**
 * Determines the game output.
 * Game ends when user or computer score reaches 5.
 */
function game(userChoice) {
    if (currentUserCounter >= gamenum) {
        // Shows the final result that the user wins 
        alert("CONGRATS! YOU BEAT THE COMPUTER :D. PRESS RESET TO PLAY AGAIN!");
        return;
    }
    if (currentComputerCounter >= gamenum) {
        // Shows the final result that the computer wins
        alert("AWW! THE COMPUTER BEAT YOU THIS TIME :( PRESS RESET TO PLAY AGAIN!");
        return;
    }
    /** 
      * Switch case used to match the user and computer choice combination and match it to a win, lose or draw result.
      * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0&ab_channel=freeCodeCamp.org"
      * Time of video - 48.12.
      */
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "ScissorsPaper":
        case "ScissorsLizard":
        case "PaperRock":
        case "PaperSpock":
        case "RockScissors":
        case "RockLizard":
        case "LizardPaper":
        case "LizardSpock":
        case "SpockRock":
        case "SpockScissors":
            won(userChoice, computerChoice);
            break;
        case "ScissorsScissors":
        case "PaperPaper":
        case "RockRock":
        case "LizardLizard":
        case "SpockSpock":
            draw(userChoice, computerChoice);
            break;
        default:
            lost(userChoice, computerChoice);
    }
    //The first to score 5 wins. The user needs to click reset game button to play again.
    if (currentUserCounter === gamenum) {
        document.getElementById("result-text").innerHTML = `You picked ${userChoice} & the Computer picked ${computerChoice} CONGRATS YOU WIN :D CLICK THE RESET BUTTON TO PLAY AGAIN`;
        return;
    }
    if (currentComputerCounter === gamenum) {
        document.getElementById("result-text").innerHTML = `You picked ${userChoice} & the Computer picked ${computerChoice} AWW! YOU LOSE THE GAME. CLICK THE RESET BUTTON TO PLAY AGAIN`;
        return;
    } 
}

/**
 * Won outcome determined, displays result-text message at the top of the screen.
 * Increments user score by one.
 * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
 * Time of video - 56:00.
 */
function won(userChoice, computerChoice) {
    incrementUserScore();
    document.getElementById("result-text").innerHTML = `You picked ${userChoice} & the Computer picked ${computerChoice} CONGRATS YOU WIN :D`;
    
    //Add style to user-win result.
    //Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
    //Time of video - 1:16:21.
    document.getElementById(userChoice).classList.add("user-win");
 
    //Green border change animation lasts for 600 milliseconds.
    //Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
    //Time of video - 1:20:30.
    animateUserSelection(userChoice, "user-win");
}

/**
 * Lost outcome determined, displays result-text message at the top of the screen.
 * Increments computer score by one.
 * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
 * Time of video - 1:08:30.
 */
function lost(userChoice, computerChoice) {
    incrementComputerScore();
    document.getElementById("result-text").innerHTML = `You picked ${userChoice} & the Computer picked ${computerChoice} AWW YOU LOSE :(`;

    //Add style to user-lose result.
    //Red border change animation lasts for 600 milliseconds.
    //Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
    //Time of video - 1:23:26.
    document.getElementById(userChoice).classList.add("user-lose");
    animateUserSelection(userChoice, "user-lose");  
} 

/** 
 * Draw outcome determined, displays result-text message at the top of the screen.
 * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
 * Time of video - 1:10:30.
 */
function draw(userChoice) {
    document.getElementById("result-text").innerHTML = `You both picked ${userChoice}. IT'S A DRAW!`;

    //Add style to user-draw result.
    //Purple border change animation lasts for 600 milliseconds.
    //Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes 'love maths' module.
    //Time of video - 1:23:45.
    document.getElementById(userChoice).classList.add("user-draw");
    animateUserSelection(userChoice, "user-draw");
}

/**
 * Animates the choice selected by the user based on whether they won/lost/draw.
 * @param animationClass
 * _ANIMATION_DURATION constant set to 600 milliseconds, at the top of the javascript file.
 */
function animateUserSelection(userChoice, animationClass) {
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove(animationClass);
    }, _ANIMATION_DURATION); 
}

/**
 * Increments the user score by 1 at the bottom of the page if the user wins. 
 * Partial credit to Code Institutes 'Love Maths' module.
 */
function incrementUserScore() {
    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;
    ++currentUserCounter;
}

/**
 * Increments the computer score by 1 at the bottom of the page if the computer wins. 
 * Partial credit to Code Institutes 'Love Maths' module.
 */
function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
    ++currentComputerCounter;
}
