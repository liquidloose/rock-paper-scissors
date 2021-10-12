function game (rounds) {  

    function computerSelection () {
            let weapons = ['rock', 'paper', 'scissors'];
            let selection = weapons[Math.floor(Math.random() * weapons.length)];
        return selection; 
        }

    function playerSelection() {
        let humanChoice = prompt("Choose your weapon: rock, paper or scissors", );
        return humanChoice;
    } 

    function playRound(playerSelection, computerSelection) {               
        let roundWinner =   playerSelection === 'rock'     && computerSelection === 'scissors' ? 'Human'
                          : playerSelection === 'paper'    && computerSelection === 'rock'     ? 'Human'
                          : playerSelection === 'scissors' && computerSelection === 'paper'    ? 'Human'
                          : playerSelection === 'scissors' && computerSelection === 'rock'     ? 'Machine'                              
                          : playerSelection === 'rock'     && computerSelection === 'paper'    ? 'Machine'                                                                                   
                          : playerSelection === 'paper'    && computerSelection === 'scissors' ? 'Machine'  // Shoot!
                          : 'It\'s a tie';  
        alert(
             `The computer chose:  ${computerSelection}
              The human chose:  ${playerSelection}
              The winner is:  ${roundWinner}`);   
    }    

    function playGame(rounds, playerSelection,computerSelection ) {
        let round = rounds;
        for(let i = 0; i < round; i++) {       
            playRound(playerSelection(), computerSelection());
        }  
    }    
    playGame(rounds, playerSelection, computerSelection);
}
game(1); //choose the number of games here




