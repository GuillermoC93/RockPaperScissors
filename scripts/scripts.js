
const buttons = document.querySelectorAll("button");
const div = document.querySelector(".results");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerSelection = button.className;
        computerSelection = computerPlay();
        let result = playRound(computerSelection, playerSelection);
        div.textContent = result;
        // div.textContent = gameScore(result);
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

let playerWinRound = "You win!"
let computerWinRound = "You lose!"
let roundDraw = "Draw!"

function playRound(computerSelection, playerSelection) {

    if ((computerSelection == "rock") && (playerSelection == "rock")) {
        return roundDraw;
    } else if ((computerSelection == "rock") && (playerSelection == "paper")) {
        return playerWinRound;
    } else if ((computerSelection == "rock") && (playerSelection == "scissors")) {
        return computerWinRound;
    }

    if ((computerSelection == "paper" && playerSelection == "rock")) {
        return computerWinRound; 
    } else if ((computerSelection == "paper" && playerSelection == "paper")) {
        return roundDraw;
    } else if ((computerSelection == "paper" && playerSelection == "scissors")) {
        return playerWinRound;
    }

    if ((computerSelection == "scissors" && playerSelection == "rock")) {
        return playerWinRound;
    } else if ((computerSelection == "scissors" && playerSelection == "paper")) {
        return computerWinRound;
    } else if ((computerSelection == "scissors" && playerSelection == "scissors")) {
        return roundDraw;
    }
}


function gameScore(result) {

    let playerScore = 0
    let computerScore = 0
    let draws = 0

    if (result === playerWinRound) {
        playerScore ++;
    } else if (result === computerWinRound) {
        computerScore ++;
    } else if (result === roundDraw) {
        draws ++;
    }
}

function overallGameScore() {

    if ((playerScore > computerScore) && (playerScore > draws)) {
        return "Congratulations, you won!"
    } else if ((computerScore > playerScore) && (computerScore > draws)) {
        return "Aww, you lost!"
    } else {
        return "No winners, try again!"
    }
}