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
function bindButtons() {
  const buttons = document.querySelectorAll('button#rock, button#paper, button#scissors');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      changeRound(round);
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
    const test = document.getElementById(`${computerPick}-img`);
    test.classList.add('computer-selection-1');
  } else {
    const test = document.getElementById(`${computerPick}-img`);
    test.classList.add('computer-selection-2');
  }
}

function roundResults(roundWinner) {
  // anounces results
  const container = document.querySelector('#announcements');
  container.textContent = `
  Round winner: ${roundWinner}`;
}

function winnerCheck(computerPick, playerPick, winner) {
  if (humanScore === numOfRounds) {
    gameResults(playerPick, winner);
  } else if (computerScore === numOfRounds) {
    gameResults(computerPick, winner);
  } else {
    roundResults(winner);
  }
}

function gameTally(computerPick, playerPick, winner) {
  if (winner === 'Machine') {
    computerScore += 1;
    round++;
    changeScore(winner);
    winnerCheck(computerPick, playerPick, winner);
  } else if (winner === 'Human') {
    humanScore += 1;
    round++;
    changeScore(winner);
    winnerCheck(computerPick, playerPick, winner);
  } else {
    roundResults(winner);
    round += 1;
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
}

game();
