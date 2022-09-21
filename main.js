const choice = ['Rock', 'Paper','Scissor'];

function getComputerChoice(){
   let computerChoiceInput = (Math.floor(Math.random() * choice.length));
   if (computerChoiceInput === 0){
    return "rock"
}else if (computerChoiceInput === 1 ){
    return 'paper'
}else(computerChoiceInput  === 2)
    return 'scissors'

}
function playerSelection(){
    playerInput = prompt('Choose your weapon! Rock, Paper or Scissor')
    return playerInput.toLowerCase()

    function playRound(computerSelection,playerSelection){
    if (computerSelection === 'rock'&& playerSelection === 'paper')
        return ('You win! Paper beats rock')
        else if (computerSelection ===1 && playerSelection === 'scissor')
        return('Better luck next time. Rock Beats Scissor.')
        else if (computerSelection === 1 && playerSelection === 'rock')
        return ('It"s a draw try again.')
        if (computerSelection === 'paper' && playerSelection === 'paper')
        return ('It"s a draw try again.')
        else if (computerSelection === 'paper' && playerSelection === 'scissor')
        return('You win! Scissor beats Paper.')
        else if (computerSelection === 'paper' && playerSelection === 'rock')
        return ('Sorry, you lose. Paper Beats Rock')
        else if ( computerSelection === 'scissor' && playerSelection === 'paper')
        return('Sorry you lose. Paper loses to scissor.')
        else if (computerSelection === 'scissor' && playerSelection === 'rock')
        return('You win! Rock beats scissor')
        else (computerSelection=== ' scissor' && playerSelection === 'scissor')
        return ('No, winner. Its a draw.')
}

}



