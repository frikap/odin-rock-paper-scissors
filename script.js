let humanScore = 0
let computerScore = 0

const resultsDiv = document.querySelector("#results");

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const resetBtn = document.querySelector("#reset");

resultsDiv.textContent = "Make your move to get started"

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice) {

    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        resultsDiv.textContent = `It's a tie! Both chose ${humanChoice} | Player ${humanScore} - Computer ${computerScore}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++; 
        resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice} | Player ${humanScore} - Computer ${computerScore}`;
    } else {
        computerScore++;
        resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice} | Player ${humanScore} - Computer ${computerScore}`;
    }

    checkGameWinner();
}

function checkGameWinner() {
    if (humanScore === 5) {
        resultsDiv.textContent = `Congratulations! You won the game! Final Score: Player ${humanScore} - Computer ${computerScore}`;
        endGame();
    } else if (computerScore === 5) {
        resultsDiv.textContent = `Game over! The computer won! Final Score: Computer ${computerScore} - Player ${humanScore}`;
        endGame();
    }
}

function endGame() {
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
  resetBtn.hidden = false;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    resultsDiv.textContent = "Make your move to get started";

    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

    resetBtn.hidden = true;
}

// Event Listeners
btnRock.addEventListener("click", () => playRound("rock"));
btnPaper.addEventListener("click", () => playRound("paper"));
btnScissors.addEventListener("click", () => playRound("scissors"));

resetBtn.addEventListener("click", resetGame);

