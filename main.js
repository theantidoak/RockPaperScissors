
let para = document.querySelector('.pp');
let para2 = document.querySelector('.pc');
let para3 = document.querySelector('.pd');
let gameButton = document.querySelector('.game');

gameButton.addEventListener('click', game);

/* */
function computerPlay() {
    
    let thing = ['rock', 'paper', 'scissors']
    return thing[Math.floor(Math.random()*thing.length)] 
};

/* */
function playRound(playerSelection, computerSelection=computerPlay()) {

    playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
    
    if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'scissors') {
    
        let result = playerSelection === 'rock' && computerSelection === 'paper' ? "You Lose! Paper beats Rock" 
        : playerSelection === 'paper' && computerSelection === 'scissors' ? "You Lose! Scissors beats Paper"
        : playerSelection === 'scissors' && computerSelection === 'rock' ? "You Lose! Rock beats Scissors" : null;

        para3.textContent = result;
        updateScore(result);


    } else if (playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper') {
        
        let result = playerSelection === 'paper' && computerSelection === 'rock' ? "You Win! Paper beats Rock" 
        : playerSelection === 'rock' && computerSelection === 'scissors' ? "You Win! Rock beats Scissors"
        : playerSelection === 'scissors' && computerSelection === 'paper' ? "You Win! Scissors beats Paper" 
        : null;

        para3.textContent = result;
        updateScore(result);
    
    } else if (playerSelection === computerSelection) {
        
        let result = "It's a tie";
        
        para3.textContent = result;
        updateScore(result);

    } else {
        
        let result = "That's not how you play the game. Point for Computer.";
        
        para3.textContent = result;
        updateScore(result);
    }
};


/* */
function updateScore(result) {
    if (result.charAt(4) == 'L' || result.charAt(0) == 'T') {
        para2.textContent = parseInt(para2.textContent) === 0 ? para2.textContent = '1' 
        : parseInt(para2.textContent) === 1 ? para2.textContent = '2'
        : parseInt(para2.textContent) === 2 ? para2.textContent = '3'
        : parseInt(para2.textContent) === 3 ? para2.textContent = '4'
        : parseInt(para2.textContent) === 4 ? para2.textContent = '5'
        : null;
    } else if (result.charAt(4) == 'W') {
        para.textContent = parseInt(para.textContent) === 0 ? para.textContent = '1' 
        : parseInt(para.textContent) === 1 ? para.textContent = '2'
        : parseInt(para.textContent) === 2 ? para.textContent = '3'
        : parseInt(para.textContent) === 3 ? para.textContent = '4'
        : parseInt(para.textContent) === 4 ? para.textContent = '5'
        : null;
    } else {
        null;
    }
}


/* */
function game() {

    for (let i = 0; i < 5; i++) {
        outcome = playRound();
        console.log(outcome);
    }

    function finalScore() {
    if (parseInt(para.textContent) === parseInt(para2.textContent)) {
        return "It's a tie!"
    } else if (parseInt(para.textContent) > parseInt(para2.textContent)) {
        return "You win the game!"
    } else if (parseInt(para.textContent) < parseInt(para2.textContent)) {
        return "You lose. Play again!"
    }
}
};

