const start = document.getElementsByClassName('btn-start');
const score = document.getElementById('score');
const round = document.getElementById('round');
const message = document.getElementsByClassName('message-area');
const playerRock = document.getElementsByClassName('btn-player-rock');
const playerScissors = document.getElementsByClassName('btn-player-scissors');
const playerPaper = document.getElementsByClassName('btn-player-paper'); 
const computerock = document.getElementsByClassName('btn-player-rock');
const computerScissors = document.getElementsByClassName('btn-player-scissors');
const computerPaper = document.getElementsByClassName('btn-player-paper');

// Computer plays
function computerPlay() {
  const selections = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * selections.length);
  return randomSelection = selections[randomIndex]; 
}

// Player's selection
function playerPlay() {
  // let personSelection = prompt("Please make your selection.").toLowerCase();  
  return personSelection;
}

// One round of game
function playRound(playerSelection, computerSelection) { 
  let roundPlayerScore = 0;
  let roundComputerScore = 0;

  if (playerSelection === computerSelection) {
    console.log(`You - ${playerSelection}, computer - ${computerSelection}. It’s a tie. Let's play again!`); 
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log(`You - ${playerSelection}, Computer - ${computerSelection}. You get one point.`);
    roundPlayerScore++; 
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    console.log(`You - ${playerSelection}, Computer - ${computerSelection}. Computer gets one point.`);
    roundComputerScore++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log(`You - ${playerSelection}, Computer - ${computerSelection}. You get one point.`);
    roundPlayerScore++; 
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    console.log(`You - ${playerSelection}, Computer - ${computerSelection}. Computer gets one point.`);
    roundComputerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log(`You - ${playerSelection}, Computer - ${computerSelection}. You get one point.`);
    roundPlayerScore++; 
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    console.log(`Player - ${playerSelection}, Computer - ${computerSelection}. Computer gets one point.`);
    roundComputerScore++;
  }
  // console.log(`Your score for the round: ${roundPlayerScore},
  // Computer's score for the round ${roundComputerScore}`);

  return [roundPlayerScore, roundComputerScore];
}

// Play game
function game() {
  const rounds = 5;
  let playerScore = 0;
  let computerScore = 0 ;

  for (let round = 1; round <= rounds; round++) { 
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    let score = playRound(playerSelection, computerSelection);
    if (score[0] === 1 && score[1] === 0) {
      playerScore++;
    } else if (score[0] === 0 && score[1] === 1) {
      computerScore++;
    }    
  }

  console.log(`You vs. computer: ${playerScore} : ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("Congratulations! You are the winner!")
  } else if (computerScore > playerScore) {
    console.log("Luck isn't on your side today :(")
  } else {
    console.log("It’s a tie!")
  }
}

game();