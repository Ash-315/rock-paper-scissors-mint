function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice === 1) {
        return "rock";
    }
    else if(choice === 2) {
        return "paper";
    }
    else if(choice === 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors; Please select your choice: ");
    choice = choice.toLowerCase();

    if(choice === "rock") {
        return "rock";
    }
    else if(choice === "paper") {
        return "paper";
    }
    else if(choice === "scissors") {
        return "scissors";
    }
    else {
        return "Invalid choice, please refresh the page to restart the game."
    }
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "rock") {
        if(computerChoice === "rock") {
            console.log("It's a tie! Both players chose Rock.");
        }
        else if(computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }
        else if(computerChoice === "scissors") {
            console.log("You win! Scissors beats Paper!");
            humanScore++;
        }
    }

    if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
        else if(computerChoice === "paper") {
            console.log("It's a tie! Both players chose Paper.");
        }
        else if(computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        }
    }

    if(humanChoice === "scissors") {
        if(computerChoice === "rock") {
            console.log("You lose! Rock beats Paper.");
            computerScore++;
        }
        else if(computerChoice === "paper") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
        else if(computerChoice === "scissors") {
            console.log("It's a tie! Both players chose Scissors");
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);