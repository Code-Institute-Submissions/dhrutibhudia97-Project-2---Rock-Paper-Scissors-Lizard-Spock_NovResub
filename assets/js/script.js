//Wait for the DOM to finish loading before running game.
document.addEventListener("DOMContentLoaded", function() {
let button = document.getElementsByTagName("button");
}) 
main();

const _animation_duration = 600;

/**Computer random choice is generated 
 * Code credited to youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0".
*/

function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    const randomChoice = [Math.floor(Math.random() * choice.length)];
    return choice[randomChoice];
}

 /**User clicking each button recognised by console.
  * Code credited to youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0".
  */
 function main() {
    document.getElementById("Rock").addEventListener("click", function() {
        game("Rock"); 
    });
    document.getElementById("Paper").addEventListener("click", function() {
        game("Paper"); 
    });
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
 * Switch case used to match the user and computer choice combination and match it to a win/ lose or draw result.
 * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0&ab_channel=freeCodeCamp.org"
*/
function game(userChoice) {
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
}

/**
 * Function won/lose and draw defined above, displays results-text message at the top of the screen.
 * Function "won" adds one to the user score, "lose" add one to the computer score.
 * Border colour changes for 600 milliseconds depending out game outcome.
 * Code credited to the youtube tutorial: "https://www.youtube.com/watch?v=jaVNP3nIAv0" and code institutes love maths module.
 */
function won(userChoice, computerChoice) {
    incrementUserScore();
    document.getElementById("result-text").innerHTML = ("You picked " + userChoice + " & the Computer picked " + computerChoice + ". CONGRATS YOU WIN :D");   
    document.getElementById(userChoice).classList.add("user-win");
    
    setTimeout(function () {document.getElementById(userChoice).classList.remove("user-win");
      }, _animation_duration);

}

function lost(userChoice, computerChoice) {
    incrementComputerScore();
    document.getElementById("result-text").innerHTML = ("You picked " + userChoice + " & the Computer picked " + computerChoice + ". AWW YOU LOSE :(");
    document.getElementById(userChoice).classList.add("user-lose");

    setTimeout(function () {document.getElementById(userChoice).classList.remove("user-lose");
      }, _animation_duration);
}

function draw (userChoice) {

    document.getElementById("result-text").innerHTML = ("You both picked " + userChoice + ". IT'S A DRAW.");
    document.getElementById(userChoice).classList.add("user-draw");

    animateUserSelection("user-draw");
    setTimeout(function () {document.getElementById(userChoice).classList.remove("user-draw");
    }, _animation_duration);
}

/**Sets time limit for all border colour changes.
function animateUserSelection (animationClass) {
    setTimeout(function () {
      document.getElementById(userChoice).classList.remove(animationClass);
    }, _animation_duration);
  } */

/** */
function incrementUserScore () {
    let oldScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;
}

function incrementComputerScore () {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}

function animateUserSelection (animationClass) {
    setTimeout(function () {
      document.getElementById(userChoice).classList.remove(animationClass);
    }, _animation_duration);
}