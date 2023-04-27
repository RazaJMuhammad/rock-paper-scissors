const buttons = document.querySelectorAll(".button");
const result = document.querySelector(".result")
const playerText = document.querySelector(".player-score");
const compText = document.querySelector(".computer-score");


function getComputerChoice(){
    var choices  = ['rock', 'paper', 'scissors'];
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

let playerSelection;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.textContent.toLowerCase();
        var computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    })
})

let userWins = 0;
let compWins = 0;

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        result.textContent = `TIE! You chose ${playerSelection} and the computer chose ${computerSelection}`;
        result.style.color = 'white';
    } else if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){
            compWins++;
            result.textContent = `You Lose! Paper beats Rock! You chose ${playerSelection} and the computer chose ${computerSelection}`;
            result.style.color = 'red';
            compText.textContent = `Computer score: ${compWins}`;
        } else {
            userWins++;
            result.textContent = `You Win! Rock beats Scissors! You chose ${playerSelection} and the computer chose ${computerSelection}`;
            result.style.color = 'green';
            playerText.textContent = `Player score: ${userWins}`;
        }
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){
            userWins++;
            result.textContent = `You Win! Paper beats Rock! You chose ${playerSelection} and the computer chose ${computerSelection}`;
            result.style.color = 'green';
            playerText.textContent = `Player score: ${userWins}`;
        } else {
            compWins++;
            result.textContent = `You Lose! Scissors beats Paper! You chose ${playerSelection} and the computer chose ${computerSelection}`;
            compText.textContent = `Computer score: ${compWins}`;
            result.style.color = 'red';
        }
    } else if (playerSelection === 'scissors'){
        if (computerSelection === 'rock'){
            compWins++;
            result.textContent = `You Lose! Rock beats Scissors! You chose ${playerSelection} and the computer chose ${computerSelection}`;
            compText.textContent = `Computer score: ${compWins}`;
            result.style.color = 'red';
        } else {
            userWins++;
            result.textContent = `You Win! Scissors beats Paper! You chose ${playerSelection} and the computer chose ${computerSelection}`;
            playerText.textContent = `Player score: ${userWins}`;
            result.style.color = 'green';
        }
    }
}
