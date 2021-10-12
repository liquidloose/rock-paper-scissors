
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
        let roundWinner =   playerSelection === 'rock' && computerSelection === 'scissors'    ?  'playerSelection'
                          : playerSelection === 'paper' && computerSelection === 'rock'       ?  'playerSelection'
                          : playerSelection === 'scissors' && computerSelection === 'paper'   ?  'playerSelection'
                          : playerSelection === 'scissors' && computerSelection === 'rock'    ?  'computerSelection'                              
                          : playerSelection === 'rock' && computerSelection === 'paper'       ?  'computerSelection'                                                                                   
                          : playerSelection === 'paper' && computerSelection === 'scissors'   ?  'computerSelection'  // Shoot!
                          : 'It\'s a tie';  
        alert(
             `The computer chose:  ${computerSelection}
              The human chose:  ${playerSelection}
              The winner is:  ${roundWinner}`);   
        scoreTally(roundWinner);   
    }

    function playGame(rounds) {
        function computerPlay () {
            let weapons = ['rock', 'paper', 'scissors'];
            let selection = weapons[Math.floor(Math.random() * weapons.length)];
        return selection; 
        }
        function playerSelection(){
            let weapons = prompt("Choose your weapon: rock, paper or scissors",);
        return weapons; 
        }

        let round = rounds;
        for(let i = 0; i < round; i++) {
            console.log(i);
            let humanPlay = playerSelection();
            let computerSelection = computerPlay();
            playRound(humanPlay, computerSelection);
        }  
    }
    playGame(rounds);
}
game(1); //choose the number of games here




