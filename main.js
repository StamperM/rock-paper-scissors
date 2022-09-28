const choice = ['Rock', 'Paper','Scissor'];
// const computerChoice = getComputerChoice();
// const playerChoice = playerSelection();
let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
   let computerChoiceInput = (Math.floor(Math.random() * choice.length));
   switch (computerChoiceInput){
    case 0: 'rock';
    break;
    case 1: 'paper';
    break;
    case 2: 'scissors';
 }
}
function playerSelection(){
    playerInput = prompt('Choose your weapon! Rock, Paper or Scissor')
    return playerInput.toLowerCase()
}


    function playRound(){
        // debugger;
        let playerChoice = playerSelection();
        let computerChoice = getComputerChoice();
    if (playerChoice === computerChoice){
        return 'Tie'
    } else if (playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissor' && computerChoice === 'paper' || playerChoice === 'rock' && computerChoice === 'scissor'){
        playerScore++;
        return 'Player'
    } else { 
        computerScore++;
        return 'Computer'
    }
   }

    function endGame(){
        
        if(playerScore > computerScore){
            return 'You Win!';
        }
        else if(playerScore < computerScore){
            return 'You Lose! Try Again.';
        }
        else{
            return 'You Tied! Better luck next time.'
        }
    }
    

   function game(){
     for (let i = 0; i < 5; i++) {
    playRound();
       
      }
}

 



 

// When a player initiates the game
// then function player selection is prompted
// if playerSelection then initiate computerSelection
// Game is 5 rounds
// When a round is play
// then you will need to track the score. 
// at the end of 5 rounds the game is over. 
// provide the score of thjkljlkjkljlkj    