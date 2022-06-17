console.log("Hello friend!")


function computerPlay() {
    const pick = (Math.floor(Math.random() * 3) + 1);
    switch (pick) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scizzors";
    }
}