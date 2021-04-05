const startBtn = document.querySelector('.btn-start');
const score = document.getElementById('score');
const round = document.getElementById('round');
const message = document.querySelector('.message-container');
const playerSelections = document.querySelectorAll('.player-selection');
const computerSelections = document.querySelectorAll('.computer-selection');
const close = document.querySelector('.close');
const playAgainBtn = document.querySelector('.play-again');
const modal = document.querySelector('#modal');

const selections = ["rock", "paper", "scissors"];
let playerSelection,
    computerSelection;  
let playerScore = 0;
let computerScore = 0; 
let currentRound = 0;

score.innerHTML = `${playerScore}:${computerScore}`; 
round.innerHTML = `${currentRound}`;

message.innerHTML = `Let's play a game! Rock, Paper, or Scissors?`;

// Toggle active class 
function toggleActive(selection) {
  selection.classList.add('active')
  setTimeout(() => {
    selection.classList.remove('active')
  },700)
}

// Computer's selection
function computerPlay() {    
     const randomIndex = Math.floor(Math.random() * selections.length);   
     computerSelections.forEach((selection, ind) => {
        if (ind === randomIndex) toggleActive(selection);
      }) ;  
     return selections[randomIndex];  
}
 
// Player's selection
playerSelections.forEach((selection, ind) => { 
      selection.addEventListener('click', () => {   
        playerSelection = selections[ind]; 
        toggleActive(selection);    
        computerSelection = computerPlay();
        play();   
      })   
}) 


// One round of game
function playRound() { 
  let roundPlayerScore = 0;
  let roundComputerScore = 0; 
 
  if (playerSelection === computerSelection) { 
    message.innerHTML = `${playerSelection.toUpperCase()} vs ${computerSelection.toUpperCase()}. It’s a tie. Let's play again!`;
  } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') || 
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') 
      ) { 
    message.innerHTML = `${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}. You get 1 point.`;
    roundPlayerScore++;  
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') || 
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
    ) { 
    message.innerHTML = `${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}. Computer gets 1 point.`;
    roundComputerScore++;
    }

 return [roundPlayerScore, roundComputerScore];
}

// Update results board
function updateResults() {
  score.innerHTML = `${playerScore}:${computerScore}`;  
  currentRound++;
  round.innerHTML =  `${currentRound}`
}

 
// Play game
function play() {
  console.log("play a round");  
  round.innerHTML = `${currentRound}`; 
  score.innerHTML = `${playerScore}:${computerScore}`; 

  let roundScore = playRound();  

  // Check if 5 rounds played
  if (currentRound < 5) { 

    // Check round scores, update DOM
    if (roundScore[0] === 0 && roundScore[1] === 0) {
      updateResults();
    } else if (roundScore[0] === 1 && roundScore[1] === 0) { 
      playerScore++;
      updateResults();
    } else if (roundScore[0] === 0 && roundScore[1] === 1) {
      computerScore++;
      updateResults();
    }    
    roundScore.innerHTML = `${playerScore}:${computerScore}`;
  
  // Show winner notification
  } else {
  }
}

// Play again 
function playAgain() {
  modal.style.display = 'none';
}

close.addEventListener('click', playAgain);
playAgainBtn.addEventListener('click', playAgain);
 