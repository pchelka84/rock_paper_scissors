const startBtn = document.querySelector('.btn-start');
const score = document.getElementById('score');
const round = document.getElementById('round');
const message = document.querySelector('.message-container');
const playerSelections = document.querySelectorAll('.player-selection');
const computerSelections = document.querySelectorAll('.computer-selection');

const selections = ["rock", "paper", "scissors"];
let playerSelection,
    computerSelection;  
let playerScore = 0;
let computerScore = 0; 

score.innerHTML = `${playerScore}:${computerScore}`; 
message.innerHTML = `Let's play a game! Rock, Paper, or Scissors?`;

// Toggle active class 
function toggleActive(selection) {
  selection.classList.add('active')
  setTimeout(() => {
    selection.classList.remove('active')
  }, 1100)
}

// Computer's selection
function computerPlay() {    
     const randomIndex = Math.floor(Math.random() * selections.length);   
     computerSelections.forEach((selection, ind) => {
        if (ind === randomIndex) toggleActive(selection);
      }) ;  
     return selections[randomIndex];  
}

let roundSelection = [];
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
    message.innerHTML = `You - ${playerSelection}, computer - ${computerSelection}. It’s a tie. Let's play again!`;
  } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') || 
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') 
      ) { 
    message.innerHTML = `You - ${playerSelection}, Computer - ${computerSelection}. You get 1 point.`;
    roundPlayerScore++; 
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') || 
    (computerSelection === 'paper' && playerSelection === 'rock') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
    ) { 
    message.innerHTML = `You - ${playerSelection}, Computer - ${computerSelection}. Computer gets 1 point.`;
    roundComputerScore++;
    }

 return [roundPlayerScore, roundComputerScore];
}


// Play game
function play() {
  console.log("start the game");
  const rounds = 5;  
  
  round.innerHTML = `1`;
  playRound();  

    let score = playRound(); 
    if (score[0] === 1 && score[1] === 0) { 
      playerScore++; 
    } else if (score[0] === 0 && score[1] === 1) {
      computerScore++;
    }    
    score.innerHTML = `${playerScore}:${computerScore}`;
}

  // console.log(`You vs. computer: ${playerScore} : ${computerScore}`);

  // if (playerScore > computerScore) {
  //   message.innerHTML = `Congratulations! You are the winner!`
  // } else if (computerScore > playerScore) {
  //   message.innerHTML = `Luck isn't on your side today :(`
  // } else {
  //   message.innerHTML = `It’s a tie!`
  // }


// game();

// startBtn.addEventListener('click', game); 
// playerSelections.addEventListener('click', playRound);