const choice = ['Rock', 'Paper','Scissor'];
const computerSelection = getComputerChoice();
const playerChoice = playerSelection();

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


    function playRound(playerChoice,computerChoice){
    if (playerChoice === computerChoice){
        return 'Tie'
    } else if (playerChoice === 'paper' && computerChoice === 'rock' || playerChoice === 'scissor' && computerChoice === 'paper' || playerChoice === 'rock' && computerChoice === 'scissor'){
        return 'Player'
    } else { 
        return 'Computer'
    }
   }

   function game(){
    const playerChoice = playerSelection();
    const computerChoice = getComputerChoice();
   
    for (let i = 0; i< 5; i++) {
        return playRound()
    
}
   }
    
//     (computerSelection === 'rock' && playerChoice === 'paper') || 
//     (computerSelection === 'paper' && playerChoice === 'scissor')
//         return ('You win!')
//         else if (computerSelection ===1 && playerChoice === 'scissor')
//         return('Better luck next time you lost')
//         else if (computerSelection=== 1 && playerChoice === 'rock')
//         return ('It is a draw try again.')
//         if (computerSelection === 'paper' && playerChoice  === 'paper')
//         return ('It is a draw try again.')
//         else if 
//         return('You win!')
//         else if (computerSelection === 'paper' && playerChoice  === 'rock')
//         return ('Better luck next time you lost')
//         else if (computerSelection === 'scissor' && playerChoice === 'paper')
//         return('Better luck next time you lost')
//         else if (computerSelection === 'scissor' && playerChoice === 'rock')
//         return('You win!')
//         else (computerSelection === 'scissor' && playerChoice  === 'scissor')
//         return ('It is a draw try again.')
// }


 

// When a player initiates the game
// then function player selection is prompted
// if playerSelection then initiate computerSelection
// Game is 5 rounds
// When a round is play
// then you will need to track the score. 
// at the end of 5 rounds the game is over. 
// provide the score of thjkljlkjkljlkj    