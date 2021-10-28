function computerSelection() {
  let weapons = ["rock", "paper", "scissors"];
  let selection = weapons[Math.floor(Math.random() * weapons.length)];
  return selection;
}

function playerSelection(computerSelection) {
  let buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let playerSelection;
      if (button.id === "rock") {
        playerSelection = "rock";
        playRound(playerSelection, computerSelection);
      } else if (button.id === "scissors") {
        playerSelection = "scissors";
        playRound(playerSelection, computerSelection);
      } else if (button.id === "paper") {
        playerSelection = "paper";
        playRound(playerSelection, computerSelection);
      }
    });
  });
}

function playRound(playerSelection, computerSelection) {
  let roundWinner =
    playerSelection === "rock" && computerSelection === "scissors"
      ? "Human"
      : playerSelection === "paper" && computerSelection === "rock"
      ? "Human"
      : playerSelection === "scissors" && computerSelection === "paper"
      ? "Human"
      : playerSelection === "scissors" && computerSelection === "rock"
      ? "Machine"
      : playerSelection === "rock" && computerSelection === "paper"
      ? "Machine"
      : playerSelection === "paper" && computerSelection === "scissors"
      ? "Machine"
      : playerSelection === computerSelection
      ? "Neither man, nor machine." // Shoot!
      : "I'm sorry, there was a user input error.";

  const container = document.querySelector("#container-2");

  const content = document.createElement("div");
  content.classList.add("content");
  content.textContent = `
  The computer chose:  ${computerSelection}\
  The human chose:  ${playerSelection}\
  The winner is:  ${roundWinner}\
  `;

  container.appendChild(content);

  let test = document.getElementById(`${computerSelection}-img`);
  test.classList.add("computer-selection");
}

function highlighter(selection) {}

function game() {
  let cpuChoice = computerSelection();
  playerSelection(cpuChoice);
}

game();