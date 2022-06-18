//plays 5 rounds of game
function game() {
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        const playerSelection = prompt("Choose your weapon: rock, paper, or scissors.");
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

//playRound function for win / lose logic
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if ((computerSelection.length - playerSelection.length) > 3) {
        win++;
        return (`You Win! Your ${playerSelection} beats HAL 9000's ${computerSelection}.`);
    }
    else if (((playerSelection.length - computerSelection.length) > 3)) {
        lose++;
        return (`You Lose! HAL 9000's ${computerSelection} beats your ${playerSelection}.`);
    }

    else if (computerSelection.length > playerSelection.length) {
        lose++;
        return (`You Lose! HAL 9000's ${computerSelection} beats your ${playerSelection}.`);
    }
    else if (playerSelection.length > computerSelection.length) {
        win++;
        return (`You Win! Your ${playerSelection} beats HAL 9000's ${computerSelection}.`);
    }
    else {
        tie++;
        return (`It's a tie! HAL 9000's ${computerSelection} and your ${playerSelection} are a match made in Heaven! <3`);
    }
}


let win = 0;
let lose = 0;
let tie = 0;
game();
if (win >= 3) {
    console.log(`You won ${win} / 5 rounds!`)
}
else if (lose >= 3) {
    console.log(`You lost ${win} / 5 rounds. Try again!`)
}
else "It's a tie, you two were made for each other!!"