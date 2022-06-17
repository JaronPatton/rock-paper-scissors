//plays 5 rounds of game
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose your weapon: rock, paper, or scizzors.");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
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
        return (`You Win! Your ${playerSelection} beats HAL 9000's ${computerSelection}.`);
    }
    else if (((playerSelection.length - computerSelection.length) > 3)) {
        return (`You Lose! HAL 9000's ${computerSelection} beats your ${playerSelection}.`);
    }

    else if (computerSelection.length > playerSelection.length) {
        return (`You Lose! HAL 9000's ${computerSelection} beats your ${playerSelection}.`);
    }
    else if (playerSelection.length > computerSelection.length) {
        return (`You Win! Your ${playerSelection} beats HAL 9000's ${computerSelection}.`);
    }
    else {
        return (`It's a tie! HAL 9000's ${computerSelection} and your ${playerSelection} are a match made in Heaven! <3`);
    }
}

//set variables and log results of playing a round

game();