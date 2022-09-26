const choice = ['Rock', 'Paper','Scissor'];
let playerChoice = playerSelection()
let computerChoice = getComputerChoice()

function getComputerChoice(){
   let computerChoiceInput = (Math.floor(Math.random() * choice.length));
   switch(computerChoiceInput){
    case 0: 'rock'
    break;
    case 1: 'paper'
    break;
    case 2: 'scissors'

   }
function playerSelection(){
    playerInput = prompt('Choose your weapon! Rock, Paper or Scissor')
    return playerInput.toLowerCase()


    function playRound(computerSelection,playerSelection){
    if (computerSelection === 'rock' && playerSelection === 'paper')
        return ('You win!')
        else if (computerSelection ===1 && playerSelection === 'scissor')
        return('Better luck next time you lost')
        else if (computerSelection=== 1 && playerSelection === 'rock')
        return ('It"s a draw try again.')
        if (computerSelection === 'paper' && playerSelection === 'paper')
        return ('It"s a draw try again.')
        else if (computerSelection === 'paper' && playerSelection === 'scissor')
        return('You win!')
        else if (computerSelection === 'paper' && playerSelection === 'rock')
        return ('Better luck next time you lost')
        else if (computerSelection === 'scissor' && playerSelection === 'paper')
        return('Better luck next time you lost')
        else if (computerSelection === 'scissor' && playerSelection === 'rock')
        return('You win!')
        else (computerSelection === 'scissor' && playerSelection === 'scissor')
        return ('It"s a draw try again.')
}




// Game is 5 rounds
// When a round is play
// then you will need to track the score. 
// at the end of 5 rounds the game is over. 
// provide the score of the