function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// console.log(getComputerChoice()); for debugging the func

function getPlayerChoice() {
  try {
    let validChoice = false;

    do {
      var playerChoice = prompt(
        "What is your choice, traveler? Paper, rock or scissors?"
      );

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

// console.log(getPlayerChoice()); for debugging
