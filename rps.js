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

//  for debugging the func
// console.log(getComputerChoice());

function getPlayerChoice() {
  try {
    let validChoice = false;

    do {
      var playerChoice = prompt(
        "What is your choice, traveler? Paper, rock or scissors?"
      ).toLowerCase();

      if (
        playerChoice == "paper" ||
        playerChoice == "rock" ||
        playerChoice == "scissors"
      ) {
        validChoice = true;
      }
    } while (validChoice == false);

    return playerChoice;
  } catch (error) {
    throw new Error(
      "You did something explendid and the func returned an error. Good."
    );
  }
}

// for debugging
// console.log(getPlayerChoice());

var playerScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
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

// var humanChoice = getPlayerChoice();
// var computerChoice = getComputerChoice();

// console.log(playRound(humanChoice, computerChoice));
