const answers = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return answers[Math.floor(Math.random() * answers.length)];
};


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    switch(true) {
        case playerSelection === computerSelection:
            result = 'Draw';
            break;
        case playerSelection === 'rock' && computerSelection === 'scissors':
            result = "You win, Rock beats Scissor";
            playerScore++
            break;
        case playerSelection === 'rock' && computerSelection === 'paper':
            result = "You lost, Paper beats Rock";
            computerScore++
            break;
        case playerSelection === 'paper' && computerSelection === 'rock':
            result = 'You win, Paper beats rock';
            playerScore++
            break;
        case playerSelection === 'paper' && computerSelection === 'scissors':
            result = 'You lose, Scissors beat paper';
            computerScore++
            break;
        case playerSelection === 'scissors' && computerSelection === 'rock':
            result = 'You lose, Rock beats Scissors';
            computerScore++
            break;
        case playerSelection === 'scissors' && computerSelection === 'paper':
            result = 'You win, Scissors beat Paper';
            playerScore++
            break;
    };
    return result};

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

const rounds = 5;
let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i=1; i <= rounds; i++) {
        player = prompt("Rock, Paper or Scissors?");
        computer = getComputerChoice();
        console.log(playRound(player, computer));
        }
        if (playerScore = 3) {return "Player won!"} else "Computer won";
}

console.log(game());