console.log("Hello friend!")



//randomly return "rock", "paper", or "scissors"
function computerPlay() {
    const pick = (Math.floor(Math.random() * 3) + 1);
    switch (pick) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

//function works but needs modified with logic for dynamic winning
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

//test arguments to see if playRound works when called)
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));