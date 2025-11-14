function playRock() {
    playGame("rock");
}

function playPaper() {
    playGame("paper");
}

function playScissors() {
    playGame("scissors");
}

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    alert(
        `You chose ${userChoice}.\nComputer chose ${computerChoice}.\n${result}`
    );
}
