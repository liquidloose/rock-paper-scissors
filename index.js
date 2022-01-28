/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-nested-ternary */

const numOfRounds = 5;
let round = 1;
let humanScore = 0;
let computerScore = 0;

function computerSelection() {
  const weapons = ['rock', 'paper', 'scissors'];
  const selection = weapons[Math.floor(Math.random() * weapons.length)];
  return selection;
}
function resetButton() {
  const reset = document.getElementById('reset');
  reset.addEventListener('click', () => {
    round = 1;
    computerScore = 0;
    humanScore = 0;
    changeRound();
    changeScore();
    enableButtons();
    removeColors();
    removeAnnouncement();
  });
}
function bindButtons() {
  const buttons = document.querySelectorAll('button#rock, button#paper, button#scissors');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const computerPick = computerSelection();
      playRound(button.id, computerPick);
      removeColors();
      addColors(computerPick);
    });
  });
}
function gameResults(computerPick, roundWinner) {
  const container = document.querySelector('#announcements');
  container.textContent = `FINAL WINNER:  ${roundWinner}`;
}
function changeRound() {
  const fetchRound = document.getElementById('round');
  fetchRound.textContent = `Current Round: ${round}`;
}
function changeScore(winner) {
  if (winner === 'Human') {
    const fetchHumanScore = document.getElementById('human-score');
    fetchHumanScore.textContent = `${humanScore}`;
  } else if (winner === 'Machine') {
    const fetchComputerScore = document.getElementById('computer-score');
    fetchComputerScore.textContent = `${computerScore}`;
  } else {
    const fetchHumanScore = document.getElementById('human-score');
    fetchHumanScore.textContent = `${humanScore}`;
    const fetchComputerScore = document.getElementById('computer-score');
    fetchComputerScore.textContent = `${computerScore}`;
  }
}
function removeColors() {
  const colorOne = document.getElementsByClassName('computer-selection-1');
  while (colorOne.length) {
    colorOne[0].classList.remove('computer-selection-1');
  }
  const colorTwo = document.getElementsByClassName('computer-selection-2');
  while (colorTwo.length) {
    colorTwo[0].classList.remove('computer-selection-2');
  }
}
function addColors(computerPick) {
  if (round % 2 === 0) {
    const compColorOne = document.getElementById(`${computerPick}-img`);
    compColorOne.classList.add('computer-selection-1');
  } else {
    const compColorTwo = document.getElementById(`${computerPick}-img`);
    compColorTwo.classList.add('computer-selection-2');
  }
}
function grayWeaponButtons() {
  const btns = document.querySelectorAll('button#rock, button#paper, button#scissors');
  btns.forEach((button) => {
    button.classList.add('gray');
  });
}
function roundResults(roundWinner) {
  // anounces results
  const container = document.querySelector('#announcements');
  container.textContent = `
  Round winner: ${roundWinner}`;
}

function disableButtons() {
  const btns = document.querySelectorAll('button#rock, button#paper, button#scissors');
  btns.forEach((button) => {
    button.disabled = true;
  });
}
function enableButtons() {
  const btns = document.querySelectorAll('button#rock, button#paper, button#scissors');
  btns.forEach((button) => {
    button.disabled = false;
    button.classList.remove('gray');
  });
}
function removeAnnouncement() {
  const announcement = document.getElementById('announcements');
  announcement.textContent = '';
}
function winnerCheck(computerPick, playerPick, winner) {
  if (humanScore >= numOfRounds) {
    gameResults(playerPick, winner);
    disableButtons();
    grayWeaponButtons();
  } else if (computerScore >= numOfRounds) {
    gameResults(computerPick, winner);
    disableButtons();
    grayWeaponButtons();
  } else {
    changeRound(round);
  }
}

function gameTally(computerPick, playerPick, winner) {
  if (winner === 'Machine') {
    computerScore += 1;
    round++;
    changeRound(round);
    changeScore(winner);
    winnerCheck(computerPick, playerPick, winner);
  } else if (winner === 'Human') {
    humanScore += 1;
    round++;
    changeRound(round);
    changeScore(winner);
    winnerCheck(computerPick, playerPick, winner);
  } else {
    round++;
    changeRound(round);
    roundResults(winner);
  }
}

function playRound(player, computer) {
  const roundWinner = player === 'rock' && computer === 'scissors'
    ? 'Human'
    : player === 'paper' && computer === 'rock'
      ? 'Human'
      : player === 'scissors' && computer === 'paper'
        ? 'Human'
        : player === 'scissors' && computer === 'rock'
          ? 'Machine'
          : player === 'rock' && computer === 'paper'
            ? 'Machine'
            : player === 'paper' && computer === 'scissors'
              ? 'Machine'
              : player === computer
                ? 'Not man, nor machine.'
                : "I'm sorry, there was a user input error.";

  gameTally(computer, player, roundWinner);
}

function game() {
  const cpuChoice = computerSelection();
  bindButtons(cpuChoice);
  resetButton();
}

game();
