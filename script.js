const options = document.querySelectorAll(".options");
const playerScoreElem = document.getElementById("playerScore");
const computerScoreElem = document.getElementById("computerScore");
const resultElem = document.getElementById("result");
let playerScore = 0;
let computerScore = 0;

options.forEach((option) => {
    option.addEventListener("click", function () {
        const pInput = this.alt; 
        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        let result;
        if (pInput === cInput) {
            result = "It's a tie! 🤝";
        } else if (
            (pInput === "Rock" && cInput === "Scissors") ||
            (pInput === "Paper" && cInput === "Rock") ||
            (pInput === "Scissors" && cInput === "Paper")
        ) {
            result = "You win! 🎉";
            playerScore++;
        } else {
            result = "Computer wins! 😢";
            computerScore++;
        }

        playerScoreElem.textContent = playerScore;
        computerScoreElem.textContent = computerScore;

        resultElem.innerText = `${result}`;
    });
});
