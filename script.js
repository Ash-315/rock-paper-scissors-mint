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
            console.log("You win! Rock beats Scissors!");
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
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        }
        else if(computerChoice === "paper") {
            console.log("You win! Scissors beats Papers.");
            humanScore++;
        }
        else if(computerChoice === "scissors") {
            console.log("It's a tie! Both players chose Scissors");
        }
    }
}

function playGame(humanSelection) {
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    alert("Computer Score: " + computerScore.toString() + "\n Human Score: " + humanScore.toString());
}

let humanScore = 0, computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playGame("rock");
});

paper.addEventListener("click", () => {
    playGame("paper");
});

scissors.addEventListener("click", () => {
    playGame("scissors");
});

