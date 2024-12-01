function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    switch (x) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("What do you choose?: ").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid Choice. Enter a valid option.");
        getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            alert("Tie! No one wins");
        } else if (humanChoice === "rock" && computerChoice === "scissors" || 
            humanChoice === "paper" && computerChoice === "rock" || 
            humanChoice === "scissors" && computerChoice === "paper") {
            alert(`You win! ${humanChoice} beats ${computerChoice}`);
            return "human";
        } else {
            alert(`You lose! ${computerChoice} beats ${humanChoice}`);
            return "computer";
        }
    }

    for (let round = 1; round <= 5; round++) {
        alert(`Round: ${round}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        let winner = playRound(humanChoice, computerChoice);

        if (winner === "human") {
            humanScore++;
        } else {
            computerScore++;
        }
    }

    if (humanScore > computerScore) {
        alert(`You Win the game!\n Final Score: You = ${humanScore}, Computer = ${computerScore}`);
    } else if (computerScore > humanScore) {
        alert(`You Lose!\n Final Score: You = ${humanScore}, Computer = ${computerScore}`);
    } else {
        alert(`Tie! No one Wins!\n Final Score: You = ${humanScore}, Computer = ${computerScore}`);
    }
}

// play the game
playGame();