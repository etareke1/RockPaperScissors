// function which returns Rock Paper or Scissors at Random

function getComputerChoice() {
    let randomSelection = Math.floor(Math.random() * 3);
    
    if (randomSelection === 0) {
        return "Rock"
    }
    else if (randomSelection === 1) {
        return "Paper"
    }
    else return "Scissors"
}


function playRound(playerSelection, computerSelection) {


    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock beats Scissors";
    }  
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection === computerSelection) {
        return "It's a Tie!"
    }
    else return "Please pick Rock, Paper or Scissors";
         
}


function game() {
    let choose = prompt("Pick Rock, Paper or Scissors")
    console.log(playRound(choose, getComputerChoice()));
}

