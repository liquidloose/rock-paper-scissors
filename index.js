
function game (rounds) {  
    let playerScore = 0;
    let computerScore = 0;
    let tieScore  = 0;
    function scoreTally (roundWinner) {       
        if (roundWinner === 'computerSelection'){
            console.log(typeof roundWinner);
            console.log('Computer won');
            computerScore++;
            console.log('The computer\'s score is: ' + computerScore)
        } else if (roundWinner === 'playerSelection'){
            playerScore++;
            console.log('Human won, their score: ' + playerScore);
        }else {
            tieScore++;
            console.log('The number of ties is: ' + tieScore);
        }        
    }

    function playRound(playerSelection, computerSelection) {    
        console.log(typeof playerSelection);
        console.log(typeof computerSelection);    
        let roundWinner =   playerSelection === 'rock' && computerSelection === 'scissors'    ? 'playerSelection' 
                          : playerSelection === 'scissors' && computerSelection === 'paper' ? 'playerSelection'
                          : playerSelection === 'paper' && computerSelection === 'rock'    ? 'playerSelection'    
                          : playerSelection === 'rock' && computerSelection === 'scissors' ? 'computerSelection'  
                          : playerSelection === 'scissors' && computerSelection === 'paper' ? 'computerSelection'                                                       
                          : playerSelection === 'paper' && computerSelection === 'rock' ? 'computerSelection'  // Shoot!
                          : 'It\'s a tie';  

        alert(`The computer chose: + ${computerSelection}
              The human chose: + ${playerSelection}
              The winner is: + ${roundWinner}`);   
        scoreTally(roundWinner);   
    }

    function playGame(rounds) {
        function computerPlay () {
            let weapons = ['rock', 'paper', 'scissors'];
            let selection = weapons[Math.floor(Math.random() * weapons.length)];
        return selection; 
        }
        function playerSelection(){
            let weapons = prompt("Choose your weapon: rock, paper or scissors", );
        return weapons; 
        }

        let round = rounds;
        for(let i = 0; i < round; i++) {
            console.log(i);
            let humanPlay = playerSelection();
            let computerSelection = computerPlay();
            playRound(humanPlay, computerSelection);
        } 
 
        if (playerScore > computerScore) {
            console.log('Humans win!!!');
            console.log(`FINAL SCORE:  
                        Human: ${playerScore}
                        Computer: ${computerScore}
                        Ties: ${tieScore}`);
        } else if (computerScore > playerScore) {
            console.log('Bow to your computer overlord, for I have won!'); 
            console.log(`FINAL SCORE:  
                        Human: ${playerScore}
                        Computer: ${computerScore}
                        Ties: ${tieScore}`);
        }
    }
    playGame(rounds);
}
game(1); //choose the number of games here




