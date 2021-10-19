function computerSelection() {
  let weapons = ["rock", "paper", "scissors"];
  let computerSelection = weapons[Math.floor(Math.random() * weapons.length)];
  alert(`this is the ${computerSelection}`);
  return computerSelection;
}
function playerSelection(computerSelection) {
  let selection;
  alert(computerSelection());
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      selection = button.id;
      game(selection, computerSelection);
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
      : "I'm sorry, there was an input error.";
  alert(
    `The computer chose:  ${computerSelection}
              The human chose:  ${playerSelection}
              The winner is:  ${roundWinner}`
  );
}

let selection = playerSelection(computerSelection);
let compSelection = computerSelection();

function game(selection, compSelection) {

  playRound(selection, compSelection);
}
