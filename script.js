
// Computer plays
function computerPlay() {
  const selections = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * selections.length);
  return randomSelection = selections[randomIndex]; 
}

// Player's selection
function playerPlay() {
  let personSelection = prompt("Please make your selection.").toLowerCase();  
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

}

game();