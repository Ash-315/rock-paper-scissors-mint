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
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {

}