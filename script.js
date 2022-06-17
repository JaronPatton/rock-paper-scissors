//plays 5 rounds of game
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}


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

//playRound function works but needs modified with logic for dynamic winning
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if ((computerSelection.length - playerSelection.length) > 3) {
        return (`You Win! ${playerSelection} beats ${computerSelection}.`);
    }
    else if (computerSelection.length > playerSelection.length) {
        return (`You Lose! ${computerSelection} beats ${playerSelection}.`);
    }
    else if (playerSelection.length > computerSelection.length) {
        return (`You Win! ${playerSelection} beats ${computerSelection}.`);
    }
    else {
        console.log(playerSelection.length);
        console.log(computerSelection.length);
        return (`It's a tie! ${computerSelection} and ${playerSelection} are equal`);
    }
}

//set variables and log results of playing a round
const playerSelection = prompt("Choose your weapon: rock, paper, or scizzors.");
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));