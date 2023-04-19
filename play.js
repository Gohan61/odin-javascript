const answers = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return answers[Math.floor(Math.random() * answers.length)];
};


function game(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    switch(true) {
        case playerSelection === computerSelection:
            result = 'Draw';
            break;
        case playerSelection === 'rock' && computerSelection === 'scissors':
            result = "You win, Rock beats Scissor";
            break;
        case playerSelection === 'rock' && computerSelection === 'paper':
            result = "You lost, Paper beats Rock";
            break;
        case playerSelection === 'paper' && computerSelection === 'rock':
            result = 'You win, Paper beats rock';
            break;
        case playerSelection === 'paper' && computerSelection === 'scissors':
            result = 'You lose, Scissors beat paper';
            break;
        case playerSelection === 'scissors' && computerSelection === 'rock':
            result = 'You lose, Rock beats Scissors';
            break;
        case playerSelection === 'scissors' && computerSelection === 'paper':
            result = 'You win, Scissors beat Paper';
            break;
    };
    return result};

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(game(playerSelection, computerSelection));