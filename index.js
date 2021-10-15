function game(rounds) {
  function computerSelection() {
    let weapons = ["rock", "paper", "scissors"];
    let selection = weapons[Math.floor(Math.random() * weapons.length)];
    return selection;
  }
  function playerSelection() {
    let humanChoicePrompt = prompt(
      "Choose your weapon: rock, paper or scissors"
    );
    let humanChoice = humanChoicePrompt.toLowerCase();
    return humanChoice;
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
    alert(
      `The computer chose:  ${computerSelection}
                The human chose:  ${playerSelection}
                The winner is:  ${roundWinner}`
    );
  }
  function playGame(rounds, playerSelection, computerSelection) {
    let round = rounds;
    for (let i = 0; i < round; i++) {
      playRound(playerSelection(), computerSelection());
    }
  }
  playGame(rounds, playerSelection, computerSelection);
}
game(1); //choose the number of games here
