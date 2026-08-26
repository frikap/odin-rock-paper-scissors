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

// console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors:");

    if (choice === null) {
        alert("Game cancelled.");
        return null; 
    }

    choice = choice.toLowerCase().trim();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }   
}

// console.log(getHumanChoice())


function playGame() {

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++; 
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();

        if (humanSelection === null) {
            console.log("Game cancelled by player.");
            return;
        }

        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game (${humanScore} vs ${computerScore})`);
    } else if (computerScore > humanScore) {
        console.log(`Game over! The computer won (${computerScore} vs ${humanScore})`);
    } else {
        console.log(`It's a draw! Final score: ${humanScore} - ${computerScore}`);
    }
}

playGame();
