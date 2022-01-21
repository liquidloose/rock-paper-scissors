/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-nested-ternary */

/*
function reset() {
  round = 1;
  humanScore = 0;
  computerScore = 0;
  changeRound(round);
  changeScore(0, 'Human');
  changeScore(0, 'Machine'); // triggers the changeScore();
   function with simulated score for the output.
}
*/
function computerSelection() {
  const weapons = ['rock', 'paper', 'scissors'];
  const cpuSelection = weapons[Math.floor(Math.random() * weapons.length)];
  return cpuSelection;
}

function playerSelection(cpuChoice) {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let playerSelection;
      if (button.id === 'rock') {
        playerSelection = 'rock';
        changeRound(round);
        playRound(playerSelection, cpuChoice);
      } else if (button.id === 'scissors') {
        changeRound(round);
        playerSelection = 'scissors';
        playRound(playerSelection, cpuChoice);
      } else if (button.id === 'paper') {
        changeRound(round);
        playerSelection = 'paper';
        playRound(playerSelection, cpuChoice);
      }
    });
  });
}
function gameResults(computerSelection, roundWinner) {
  const container = document.querySelector('#announcements');
  container.textContent = `FINAL WINNER:  ${roundWinner}`;
  // eslint-disable-next-line no-undef
  container.appendChild(content);
  const test = document.getElementById(`${computerSelection}-img`);
  test.classList.add('computer-selection');
}
function changeRound(round) {
  if (round <= numOfRounds) {
    const fetchRound = document.getElementById('round');
    fetchRound.textContent = `Current Round: ${round}`;
  }
}
function changeScore(score, roundWinner) {
  if (roundWinner === 'Human' && humanScore <= numOfRounds) {
    const fetchHumanScore = document.getElementById('human-score');
    fetchHumanScore.textContent = `${humanScore}`;
  } else if (roundWinner === 'Machine' && computerScore <= numOfRounds) {
    const fetchComputerScore = document.getElementById('computer-score');
    fetchComputerScore.textContent = `${computerScore}`;
    const newItem = document.createElement('p');
    newItem.id = 'computer-score';
    newItem.innerHTML = `${score}`;
    fetchComputerScore.parentNode.replaceChild(newItem, fetchComputerScore);
  }
}

function roundResults(computerSelection, playerSelection, roundWinner) {
  // anounces results
  const container = document.querySelector('#announcements');

  container.textContent = `
  Round winner: ${roundWinner}`;
  // highlights computer selection with green box-shadow
  const test = document.getElementById(`${computerSelection}-img`);
  test.classList.add('computer-selection');

  if (roundWinner === 'Human') {
    changeScore(humanScore, roundWinner);
  } else if (roundWinner === 'Machine') {
    changeScore(computerScore, roundWinner);
  } else {
    changeRound(round);
  }
}

function winnerCheck(computerSelection, playerSelection, roundWinner) {
  if (humanScore === numOfRounds) {
    changeScore(humanScore, roundWinner);
    gameResults(playerSelection, roundWinner);
    // eslint-disable-next-line no-undef
    button.disable();
  } else if (computerScore === numOfRounds) {
    changeScore(computerScore, roundWinner);
    gameResults(computerSelection, roundWinner);
  } else {
    roundResults(computerSelection, playerSelection, roundWinner);
    round++;
  }
}

function gameTally(computerSelection, playerSelection, roundWinner) {
  if (roundWinner === 'Machine') {
    computerScore += 1;
    winnerCheck(computerSelection, playerSelection, roundWinner);
  } else if (roundWinner === 'Human') {
    humanScore += 1;
    winnerCheck(computerSelection, playerSelection, roundWinner);
  } else {
    roundResults(computerSelection, playerSelection, roundWinner);
    round += 1;
  }
}

function playRound(playerSelection, computerSelection) {
  const roundWinner = playerSelection === 'rock' && computerSelection === 'scissors'
    ? 'Human'
    : playerSelection === 'paper' && computerSelection === 'rock'
      ? 'Human'
      : playerSelection === 'scissors' && computerSelection === 'paper'
        ? 'Human'
        : playerSelection === 'scissors' && computerSelection === 'rock'
          ? 'Machine'
          : playerSelection === 'rock' && computerSelection === 'paper'
            ? 'Machine'
            : playerSelection === 'paper' && computerSelection === 'scissors'
              ? 'Machine'
              : playerSelection === computerSelection
                ? 'Not man, nor machine.' // Shoot!
                : "I'm sorry, there was a user input error.";

  gameTally(computerSelection, playerSelection, roundWinner);
}

function game() {
  const cpuChoice = computerSelection();
  playerSelection(cpuChoice);
}

let numOfRounds = 5;
let round = 1;
let humanScore = 0;
let computerScore = 0;

game();
