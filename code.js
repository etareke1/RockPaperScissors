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

// win and loss counters to decide who wins each round of 5

let winCounter = 0;
let lossCounter = 0;

function firstUpperCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// plays one round of the game and returns the winner of the round

function playRound(playerSelection, computerSelection) {


    if (firstUpperCase(playerSelection) === "Rock" && computerSelection === "Scissors") {
        winCounter++
        return "You Win! Rock beats Scissors";
    }  
    else if (firstUpperCase(playerSelection) === "Paper" && computerSelection === "Rock") {
        winCounter++
        return "You Win! Paper beats Rock";
    }
    else if (firstUpperCase(playerSelection) === "Scissors" && computerSelection === "Paper") {
        winCounter++
        return "You Win! Scissors beats Paper";
    }
    else if (firstUpperCase(playerSelection) === "Scissors" && computerSelection === "Rock") {
        lossCounter++
        return "You Lose! Rock beats Scissors";
    }
    else if (firstUpperCase(playerSelection) === "Rock" && computerSelection === "Paper") {
        lossCounter++
        return "You Lose! Paper beats Rock";
    }
    else if (firstUpperCase(playerSelection) === "Paper" && computerSelection === "Scissors") {
        lossCounter++
        return "You Lose! Scissors beats Paper";
    }
    else if (firstUpperCase(playerSelection) === computerSelection) {
        return "It's a Tie!"
    }
    else return "Please pick Rock, Paper or Scissors";
         
}

// game function loops the game 5 times and outputs who has won the most rounds

function game() {

    for (i=1; i < 6; i++) {
    let choose = prompt("Pick Rock, Paper or Scissors")
    alert(playRound(choose, getComputerChoice()));
    }

    if (winCounter > lossCounter) {
        alert("Congrats you have won the game");
    }
    else if (lossCounter > winCounter) {
        alert("Sorry you have lost the game!")
    }
    else alert("Theres no winner this time :/")
}

game();
