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

console.log(getComputerChoice());
