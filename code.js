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

console.log(getComputerChoice());