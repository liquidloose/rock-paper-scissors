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
      playRound(button.id, computerSelection());
    });
  });
}
function gameResults(computerPick, roundWinner) {
  const container = document.querySelector('#announcements');
  container.textContent = `FINAL WINNER:  ${roundWinner}`;
  // eslint-disable-next-line no-undef
  container.appendChild(content);
  const test = document.getElementById(`${computerPick}-img`);
  test.classList.add('computer-selection');
}
function changeRound(gameRound) {
  if (gameRound <= numOfRounds) {
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

function roundResults(computerPick, winner) {
  // anounces results
  const container = document.querySelector('#announcements');

  container.textContent = `
  Round winner: ${winner}`;
  // highlights computer selection with green box-shadow
  const test = document.getElementById(`${computerPick}-img`);
  test.classList.add('computer-selection');

  if (winner === 'Human') {
    changeScore(humanScore, winner);
  } else if (winner === 'Machine') {
    changeScore(computerScore, winner);
  } else {
    changeRound(round);
  }
}

function winnerCheck(computerPick, playerPick, winner) {
  if (playerPick === numOfRounds) {
    changeScore(playerPick, winner);
    gameResults(playerPick, winner);
    // eslint-disable-next-line no-undef
    button.disable();
  } else if (computerPick === numOfRounds) {
    changeScore(computerPick, winner);
    gameResults(computerPick, winner);
  } else {
    roundResults(computerPick, winner);
    round++;
  }
}

function gameTally(computerPick, playerPick, winner) {
  if (winner === 'Machine') {
    computerScore += 1;
    winnerCheck(computerPick, playerPick, winner);
  } else if (winner === 'Human') {
    humanScore += 1;
    winnerCheck(computerPick, playerPick, winner);
  } else {
    roundResults(computerPick, playerPick, winner);
    round += 1;
  }
}

function playRound(player, computer) {
  // eslint-disable-next-line prefer-const
  let roundWinner = player === 'rock' && computer === 'scissors'
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

  gameTally(computer, roundWinner);
}

function game() {
  const cpuChoice = computerSelection();
  bindButtons(cpuChoice);
}

game();

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
