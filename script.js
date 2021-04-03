const startBtn = document.querySelector('.btn-start');
const score = document.getElementById('score');
const round = document.getElementById('round');
const message = document.querySelector('.message-area');
const playerSelections = document.querySelectorAll('.player-selection');
const computerSelections = document.querySelectorAll('.computer-selection');

const selections = ["rock", "paper", "scissors"];
let playerSelection;   

// Toggle active class 
function toggleActive(selection) {
  selection.classList.add('active')
  setTimeout(() => {
    selection.classList.remove('active')
  }, 1200)
}

// Computer's selection
function computerPlay() {    
     const randomIndex = Math.floor(Math.random() * selections.length);   
     computerSelections.forEach((selection, ind) => {
        if (ind === randomIndex) toggleActive(selection);
      })  ;  
     return selections[randomIndex];  
}

// Player's selection
playerSelections.forEach((selection, ind) => {
      selection.addEventListener('click', (e) => {  
        
        toggleActive(e.target);   

        let playerSelection = selections[ind];
        
        let computerSelection = computerPlay();
    
        console.log(`Player's selection ${selections[ind]} and computer's selection ${computerSelection}`);   
      }) 
    play();  
}) 


// One round of game
function playRound() { 
  let roundPlayerScore = 0;
  let roundComputerScore = 0; 

  message.innerHTML = `Make your choice`;
 
  console.log(roundSelection) 
 
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

 
}

// function messageNotification(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection && playerSelection !== undefined && computerSelection !== undefined) { 
//     message.innerHTML = `You - ${playerSelection}, computer - ${computerSelection}. It’s a tie. Let's play again!`;
//   } else if (
//       (playerSelection === 'rock' && computerSelection === 'scissors') || 
//       (playerSelection === 'paper' && computerSelection === 'rock') ||
//       (playerSelection === 'scissors' && computerSelection === 'paper') 
//       ) { 
//     message.innerHTML = `You - ${playerSelection}, Computer - ${computerSelection}. You get 1 point.`;
//     roundPlayerScore++; 
//   } else if (
//     (computerSelection === 'rock' && playerSelection === 'scissors') || 
//     (computerSelection === 'paper' && playerSelection === 'rock') ||
//     (computerSelection === 'scissors' && playerSelection === 'paper')
//     ) { 
//     message.innerHTML = `You - ${playerSelection}, Computer - ${computerSelection}. Computer gets 1 point.`;
//     roundComputerScore++;
//     }

//   return [roundPlayerScore, roundComputerScore];
// }

// Play game
function play() {
  console.log("start the game");
  const rounds = 5;  
  let playerScore = 0;
  let computerScore = 0 ; 
  
  round.innerHTML = `1`;
  playRound();  
   
  // let playerSelection = roundSelection[0];
  // let computerSelection = roundSelection[1];
  // playRound(playerSelection, computerSelection);

 

  // message.innerHTML= `Please make your selection`; 
  // score.innerHTML = `${playerScore}:${computerScore}`

  // for (let round = 1; round <= rounds; round++) { 
  //   playerSelection = playerPlay(); 
  //   playerMadeSelection = true; 

  //   if (playerMadeSelection) {
  //     computerSelection = computerPlay();
  //     playerMadeSelection = false;
  //   }

    
  //   let score = playRound(playerSelection, computerSelection); 
  //   if (score[0] === 1 && score[1] === 0) { 
  //     playerScore++; 
  //   } else if (score[0] === 0 && score[1] === 1) {
  //     computerScore++;
  //   }    
  //   score.innerHTML = `${playerScore}:${computerScore}`;
  // }

  // console.log(`You vs. computer: ${playerScore} : ${computerScore}`);

  // if (playerScore > computerScore) {
  //   message.innerHTML = `Congratulations! You are the winner!`
  // } else if (computerScore > playerScore) {
  //   message.innerHTML = `Luck isn't on your side today :(`
  // } else {
  //   message.innerHTML = `It’s a tie!`
  // }
}

// game();

// startBtn.addEventListener('click', game); 
// playerSelections.addEventListener('click', playRound);