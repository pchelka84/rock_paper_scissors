// Computer plays
function computerPlay() {
  const selections = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * selections.length);
  return randomSelection = selections[randomIndex]; 
}

// Player's selection
function playerPlay() {
  let personSelection = prompt("Please make your selection.").toLowerCase();
  if (personSelection !== 'rock' || personSelection !== 'paper' || 
  personSelection !== 'scissors') {
    personSelection = prompt("Please choose one of three - rock, paper, or scissors")
  }
  return personSelection;
}

// One round of game
function playRound(playerSelection, computerSelection) {

}

// Play game
function game() {

}
 