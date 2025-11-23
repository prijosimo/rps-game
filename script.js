let playCount = 0;   // How many times the user has played
let score = { wins: 0, losses: 0, draws: 0 }; // Keeps results

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
    if (playCount >= 3) {
        alert("Game over! You already played 3 times.");
        return;
    }

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a draw!";
        score.draws++;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        score.wins++;
    } else {
        result = "You lose!";
        score.losses++;
    }

    playCount++;

    alert(
        `Round ${playCount}:\nYou chose ${userChoice}.\nComputer chose ${computerChoice}.\n${result}`
    );

    // After 3 rounds, show summary
    if (playCount === 3) {
        alert(
            `Game Over!\nWins: ${score.wins}\nLosses: ${score.losses}\nDraws: ${score.draws}`   
        );
    }
}
