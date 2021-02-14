
const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
const playerWins = document.querySelector(".playerScore");
const computerWins = document.querySelector(".computerScore");
const gameScore = document.querySelector(".overallScore");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.className;
        computerSelection = computerPlay();
        let result = playRound(computerSelection, playerSelection);
        playerWins.textContent = "Player score: " + playerScore;
        computerWins.textContent = "Computer score: " + computerScore;
        results.textContent = result;
        gameScore.textContent = overallGameScore();
    });
});

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3) + 1;

    if (computerSelection == 1) {
        computerSelection = "rock";
    } else if (computerSelection == 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }

    return computerSelection;
}

let playerScore = 0
let computerScore = 0
let draws = 0


function playRound(computerSelection, playerSelection) {

    let playerWinRound = "You win! " + playerSelection + " beats " + computerSelection;
    let computerWinRound = "You lose! " + computerSelection + " beats " + playerSelection;
    let roundDraw = "Draw!"

    if ((computerSelection == "rock") && (playerSelection == "rock")) {
        draws++;
        return roundDraw;
    } else if ((computerSelection == "rock") && (playerSelection == "paper")) {
        playerScore++;
        return playerWinRound;
    } else if ((computerSelection == "rock") && (playerSelection == "scissors")) {
        computerScore++;
        return computerWinRound;    
    }

    if ((computerSelection == "paper" && playerSelection == "rock")) {
        computerScore++;
        return computerWinRound; 
    } else if ((computerSelection == "paper" && playerSelection == "paper")) {
        draws++;
        return roundDraw;
    } else if ((computerSelection == "paper" && playerSelection == "scissors")) {
        playerScore++;
        return playerWinRound;
    }

    if ((computerSelection == "scissors" && playerSelection == "rock")) {
        playerScore++;
        return playerWinRound;
    } else if ((computerSelection == "scissors" && playerSelection == "paper")) {
        computerScore++;
        return computerWinRound;
    } else if ((computerSelection == "scissors" && playerSelection == "scissors")) {
        draws++;
        return roundDraw;
    }
}


function overallGameScore() {
    if (playerScore >= 5) {
        return "Congratulations, you win!";
    } else if (computerScore >= 5) {
        return "Aww, you lost!";
    } else {
        return;
    }
}