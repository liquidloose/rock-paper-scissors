function computerSelection() {
  let weapons = ["rock", "paper", "scissors"];
  let selection = weapons[Math.floor(Math.random() * weapons.length)];
  return selection;
}

function playerSelection(computerSelection) {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let playerSelection = button.id;
      playRound(playerSelection, computerSelection);
    });
  });
  
}

function playRound (playerSelection, computerSelection) {
  let blubber = playerSelection;
  //alert(`The human chose ${blubber}`);
  //alert(`The computer chose ${computerSelection}`)
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
      alert(
        `The computer chose:  ${computerSelection}
                  The human chose:  ${playerSelection}
                  The winner is:  ${roundWinner}`
      );
}


function game () {
  let cpuChoice = computerSelection();
  playerSelection(cpuChoice);
}

game();