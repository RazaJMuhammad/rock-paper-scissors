function getComputerChoice(){
    var choices  = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a tie!";
    } else if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            return "You Win! Paper beats Rock";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            return "You Lose! Rock beats Scissors";
        } else {
            return "You Win! Scissors beats Paper";
        }
    }
}

function game(){

    var playerSelection = window.prompt("Rock, Paper, or Scissors?");
    var computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
        
    
}