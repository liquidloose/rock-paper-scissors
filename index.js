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

function gameResults(computerSelection, roundWinner) {
  const container = document.querySelector("#container-2");
  const content = document.createElement("div");
  content.classList.add("content");
  content.textContent = `
  THE WINNER IS: ${roundWinner}!!!\
  The computer's score is: ${computerScore};
  The human's score is: ${humanScore};  
  `;
  container.appendChild(content);
  let test = document.getElementById(`${computerSelection}-img`);
  test.classList.add("computer-selection");
}

function changeRound() {
  let fetchRound = document.getElementById('round');
  let newRound = document.createElement('p');
  newRound.id = 'round';
  newRound.innerHTML = `${round}`;
  fetchRound.parentNode.replaceChild(newRound, fetchRound);
}

function changeScore(score, roundWinner) {
  if (roundWinner === "Human") {
    let fetchHumanScore = document.getElementById("human-score");
    let newItem = document.createElement("p");
    newItem.id = "human-score";
    newItem.innerHTML = `${score}`;
    fetchHumanScore.parentNode.replaceChild(newItem, fetchHumanScore);
  } else if (roundWinner === "Machine") {
    let fetchComputerScore = document.getElementById("computer-score");
    let newItem = document.createElement("p");
    newItem.id = "computer-score";
    newItem.innerHTML = `${score}`;
    fetchComputerScore.parentNode.replaceChild(newItem, fetchComputerScore);
  }
}

function roundResults(computerSelection, playerSelection, roundWinner) {
  //anounces results
  const container = document.querySelector("#container-2");
  const content = document.createElement("div");
  content.classList.add("content");
  content.textContent = `
  The computer chose:  ${computerSelection}\
  The human chose:  ${playerSelection}\
  The winner is:  ${roundWinner}\
  The computer's score is: ${computerScore}\ 
  `;
  // highlights computer selection with green box-shadow
  container.appendChild(content);
  let test = document.getElementById(`${computerSelection}-img`);
  test.classList.add("computer-selection");

  if (roundWinner === "Human") {
    changeScore(humanScore, roundWinner);
  } else if (roundWinner === "Machine") {
    changeScore(computerScore, roundWinner);
  }
}

function winnerCheck(computerSelection, playerSelection, roundWinner) {
  if (humanScore == 5) {
    gameResults(playerSelection, playerSelection, roundWinner);
    changeScore(humanScore, roundWinner);
  } else if (computerScore == 5) {
    gameResults(computerSelection, playerSelection, roundWinner);
    changeScore(computerScore, roundWinner);
  } 
  else {
    roundResults(computerSelection, playerSelection, roundWinner);
  }
}

function gameTally(computerSelection, playerSelection, roundWinner) {
  if (roundWinner === "Machine") {
    computerScore += 1;
    winnerCheck(computerSelection, playerSelection, roundWinner);
  } else if (roundWinner === "Human") {
    humanScore += 1;
    winnerCheck(computerSelection, playerSelection, roundWinner);
  } else {
    roundResults(computerSelection, playerSelection, roundWinner);
  }
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

  gameTally(computerSelection, playerSelection, roundWinner);
}

function game() {
  let cpuChoice = computerSelection();
  playerSelection(cpuChoice);
}

let round = 1;
let humanScore = 0;
let computerScore = 0;
game();
