function reset() {
  round = 1;
  humanScore = 0;
  computerScore = 0;
  changeRound(round);
  changeScore(0, "Human");
  changeScore(0, "Machine"); //triggers the changeScore(); function with simulated score for the output.
}

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
        changeRound(round);
        playRound(playerSelection, computerSelection);
      } else if (button.id === "scissors") {
        changeRound(round);
        playerSelection = "scissors";
        playRound(playerSelection, computerSelection);
      } else if (button.id === "paper") {
        changeRound(round);
        playerSelection = "paper";
        playRound(playerSelection, computerSelection);
      } 
    });

  });
}





function gameResults(computerSelection, roundWinner, playerSelection) {
  const container = document.querySelector("#announcements");
  
  container.textContent = `FINAL WINNER:  ${roundWinner}`;






  container.appendChild(content);
  let test = document.getElementById(`${computerSelection}-img`);
  test.classList.add("computer-selection");
}

function changeRound(round) {
  if(round <= numOfRounds){
  let fetchRound = document.getElementById("round");
  fetchRound.textContent = `Current Round: ${round}`;
  console.log(round);
  }
}

function changeScore(score, roundWinner) {
  if (roundWinner === "Human" && humanScore <= numOfRounds) {
    let fetchHumanScore = document.getElementById("human-score");
    fetchHumanScore.textContent = `${humanScore}`;
  } else if ((roundWinner === "Machine") && (computerScore <= numOfRounds)) {
    let fetchComputerScore = document.getElementById("computer-score");
    fetchComputerScore.textContent = `${computerScore}`;
    let newItem = document.createElement("p");
    newItem.id = "computer-score";
    newItem.innerHTML = `${score}`;
    fetchComputerScore.parentNode.replaceChild(newItem, fetchComputerScore);
  }
}

function roundResults(computerSelection, playerSelection, roundWinner) {
  //anounces results
  const container = document.querySelector("#announcements");
  
  container.textContent = `
  Round winner: ${roundWinner}`;
  // highlights computer selection with green box-shadow
  let test = document.getElementById(`${computerSelection}-img`);
  test.classList.add("computer-selection");

  if (roundWinner === "Human") {
    changeScore(humanScore, roundWinner);
  } else if (roundWinner === "Machine") {
    changeScore(computerScore, roundWinner);
  }else {
    changeRound(round);
  }
}

function winnerCheck(computerSelection, playerSelection, roundWinner) {
  if (humanScore == numOfRounds) {
    changeScore(humanScore, roundWinner);
    gameResults(playerSelection, roundWinner);    
    button.disable();
  } else if (computerScore == numOfRounds) {
    changeScore(computerScore, roundWinner);
    gameResults(computerSelection, roundWinner);    
  } else {
    roundResults(computerSelection, playerSelection, roundWinner);
    round++;
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
    round += 1;
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
      ? "Not man, nor machine." // Shoot!
      : "I'm sorry, there was a user input error.";

  gameTally(computerSelection, playerSelection, roundWinner);
}

function game() {
  let cpuChoice = computerSelection();
  playerSelection(cpuChoice);
}

let numOfRounds = 5;
let round = 1;
let humanScore = 0;
let computerScore = 0;

game();
