function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3) + 1;
    switch (rand) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
    return undefined;
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        return `Draw! ${playerChoice} and ${computerChoice}`
    }
    switch (playerChoice) {
        case "rock":
            switch (computerChoice) {
                case "paper":
                    return "You lose! Paper beats Rock";
                case "scissors":
                    return "You win! Rock beats Scissors";
            }
        case "paper":
            switch (computerChoice) {
                case "rock":
                    return "You win! Paper beats Rock";
                case "scissors":
                    return "You lose! Scissors beats Paper";
            }
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    return "You lose! Rock beats Scissors";
                case "paper":
                    return "You win! Scissors beats Paper";
            }
        default:
            return undefined;
    }
}

function playGame() {
    while (true) {
        const computerChoice = getComputerChoice();
        const playerChoice = prompt("Rock, Paper or Scissors?", "");
        console.log(playRound(playerChoice, computerChoice));
    }
}