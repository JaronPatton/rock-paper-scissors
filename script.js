console.log("Hello friend!")

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
        console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
    }
    else if (computerSelection.length > playerSelection.length) {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
    }
    else {
        console.log(`It's a tie! ${computerSelection} and ${playerSelection} are equal`);
    }
}

//test arguments to see if playRound works when called)
/*
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));*/