const choice = ['Rock', 'Paper','Scissor'];

function getComputerChoice(){
   let computerSelection = (Math.floor(Math.random() * choice.length));
   if (computerSelection=== 0){
    return "rock"
}else if (computerSelection === 1 ){
    return 'paper'
}else(computerSelection === 2)
    return 'scissors'

}

function singleRound(playerSelection,getComputerChoice){
    if (getComputerChoice === 'rock'&& playerSelection === 'paper')
        return ('You win! Paper beats rock')
        else if (getComputerChoice ===1 && playerSelection === 'scissor')
        return('Better luck next time. Rock Beats Scissor.')
        else if (getComputerChoice === 1 && playerSelection === 'rock')
        return ('It"s a draw try again.')
        if (getComputerChoice === 'paper' && playerSelection === 'paper')
        return ('It"s a draw try again.')
        else if (getComputerChoice === 'paper' && playerSelection === 'scissor')
        return('You win! Scissor beats Paper.')
        else if (getComputerChoice === 'paper' && playerSelection === 'rock')
        return ('Sorry, you lose. Paper Beats Rock')
        else if ( getComputerChoice === 'scissor' && playerSelection === 'paper')
        return('Sorry you lose. Paper loses to scissor.')
        else if (getComputerChoice === 'scissor' && playerSelection === 'rock')
        return('You win! Rock beats scissor')
        else (getComputerChoice === ' scissor' && playerSelection === 'scissor')
        return ('No, winner. Its a draw.')
}


// function roundPlay () {
//     
// }
// function roundPlay () {
//    
