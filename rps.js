function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

var playerScore = 0;
var playerScoreGame = 0;
var computerScore = 0;
var computerScoreGame = 0;

function playRound(humanChoice, computerChoice) {
  switch (humanChoice.toLowerCase()) {
    case "paper":
      if (computerChoice == "rock") {
        playerScore++;
        return "Winner! Paper beats Rock.";
      }

      if (computerChoice == "scissors") {
        computerScore++;
        return "Loser! Scissors beats Paper.";
      }

      if (computerChoice == "paper") {
        return "Tie! Paper and Paper!";
      }

    case "rock":
      if (computerChoice == "scissors") {
        playerScore++;
        return "Winner! Rock beats Scissors.";
      }

      if (computerChoice == "paper") {
        computerScore++;
        return "Loser! Paper beats Rock.";
      }

      if (computerChoice == "rock") {
        return "Tie! Rock and Rock! (maybe 'N roll too!)";
      }

    case "scissors":
      if (computerChoice == "paper") {
        playerScore++;
        return "Winner! Scissors beats Paper.";
      }

      if (computerChoice == "rock") {
        computerScore++;
        return "Loser! Rock beats Scissors.";
      }

      if (computerChoice == "scissors") {
        return "Tie! Scissors and Scissors!";
      }
  }
}

const body = document.querySelector("body");
body.setAttribute("style", "margin: 0px; background: #5D4954; ");

const container = document.querySelector("#container");
container.setAttribute(
  "style",
  "display: flex; align-content:center; justify-content:center;  background: #E6DBD0; margin: 4rem; flex-direction: column; "
);

const uiGameScore = document.querySelector("#score-game");
uiGameScore.setAttribute(
  "style",
  "font-size: 14px; color: #754F5B; text-align: center; margin: 0.5rem;"
);
uiGameScore.textContent = playerScoreGame + " : " + computerScoreGame;

const uiMatchScore = document.querySelector("#score-match");
uiMatchScore.setAttribute(
  "style",
  "font-size: 36px; text-align: center; margin: 2rem;"
);

const interface = document.querySelector("#interface");
interface.setAttribute("style", "display: flex; justify-content: center; ");
uiMatchScore.textContent = playerScore + " : " + computerScore;

const choices = interface.querySelectorAll("button");

choices.forEach((button) => {
  button.setAttribute(
    "style",
    "border: none; width: 4rem; height: 4rem; margin: 1rem; font-size: 14px; border-radius: 50%"
  );
  button.addEventListener("click", () => {
    alert(playRound(button.textContent, getComputerChoice()));
    if (playerScore == 5) {
      playerScore = 0;
      computerScore = 0;
      playerScoreGame++;
      uiGameScore.textContent = playerScoreGame + " : " + computerScoreGame;
      uiMatchScore.textContent = "Player wins!";
    } else if (computerScore == 5) {
      playerScore = 0;
      computerScore = 0;
      computerScoreGame++;
      uiGameScore.textContent = playerScoreGame + " : " + computerScoreGame;
      uiMatchScore.textContent = "Computer wins! Ya loser!";
    } else {
      uiMatchScore.textContent = playerScore + " : " + computerScore;
    }
  });
});
