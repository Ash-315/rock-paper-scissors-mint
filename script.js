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
            result.textContent = "It's a tie! Both players chose Rock.";
            document.body.appendChild(result);
        }
        else if(computerChoice === "paper") {
            result.textContent = ("You lose! Paper beats Rock.");
            document.body.appendChild(result);
            computerScore++;
        }
        else if(computerChoice === "scissors") {
            result.textContent = ("You win! Rock beats Scissors!");
            document.body.appendChild(result);
            humanScore++;
        }
    }

    if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            result.textContent = ("You win! Paper beats Rock.");
            document.body.appendChild(result);
            humanScore++;
        }
        else if(computerChoice === "paper") {
            result.textContent = ("It's a tie! Both players chose Paper.");
            document.body.appendChild(result);
        }
        else if(computerChoice === "scissors") {
            result.textContent = ("You lose! Scissors beats Paper.");
            document.body.appendChild(result);
            computerScore++;
        }
    }

    if(humanChoice === "scissors") {
        if(computerChoice === "rock") {
            result.textContent = ("You lose! Rock beats Scissors.");
            document.body.appendChild(result);
            computerScore++;
        }
        else if(computerChoice === "paper") {
            result.textContent = ("You win! Scissors beats Papers.");
            document.body.appendChild(result);
            humanScore++;
        }
        else if(computerChoice === "scissors") {
            result.textContent = ("It's a tie! Both players chose Scissors");
            document.body.appendChild(result);
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

const result = document.createElement("div");

rock.addEventListener("click", () => {
    playGame("rock");
});

paper.addEventListener("click", () => {
    playGame("paper");
});

scissors.addEventListener("click", () => {
    playGame("scissors");
});

