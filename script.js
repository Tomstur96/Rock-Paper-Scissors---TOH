// // PROBLEM: 

// // Write a program that allows the user to play " 'Rock', 'Paper', 'Scissors' "

// // PSEUDOCODE:


// // When user inputs a variable
// // Run function playRound
// // If user's input is greater than computers, return " You Win! '*user-input*' beats '*computer-input*' "
// // If user's input is less than computers, return " You lose! '*computer-input*' beats '*user-input*' "
// // Run function playRound 5 times and record scores.
// // Report overall winner after 5 games.

// // Rock > Scissors
// // Paper > Rock
// // Scissors > Paper


// // function game(playRound) {
// //   for (let i = )

// // }


// function playRound(playerSelection, computerSelection) {
//   let result;

//   if (playerSelection === computerSelection) {
//     result = "tie";
//     result = alert("It's a tie"); 
//   } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
//              (playerSelection === "paper" && computerSelection === "rock") || 
//              (playerSelection === "scissors" && computerSelection === "paper")) {
//               result = "win";
//     result = alert("You win! " + playerSelection + " beats " + computerSelection);
//   } else {
//     result = "lose";
//     result = alert("You lose! " + computerSelection + " beats " + playerSelection);
//   }
//   return result;
// };

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (let i = 1; i <= 5; i++) {
//     const result = playRound();
//     if (result === "win") {
//       playerScore++;
//       alert(`You win round ${i}!`);
//     } else if (result === "lose") {
//       computerScore++;
//       alert(`Computer wins round ${i}!`);
//     } else {
//       alert(`Round ${i} is a tie.`);
//     }
//   }
//   if (playerScore > computerScore) {
//     alert(`You win the game! Final score: You ${playerScore}, Computer ${computerScore}.`);
//   } else if (playerScore < computerScore) {
//     alert(`Computer wins the game! Final score: You ${playerScore}, Computer ${computerScore}.`);
//   } else {
//     alert(`The game is a tie! Final score: You ${playerScore}, Computer ${computerScore}.`);
//   }
// }


// const play = game();
// const playGame = playRound();
// const playerSelection = userInput();
// const computerSelection = getComputerChoice();
// console.log(play);

// function userInput() {
//   let choice = prompt("Choose Rock, Paper, or Scissors");
//   choice = choice.toLowerCase();
  
//   if (choice === "rock" || choice === "paper" || choice === "scissors") {
//     return choice;
//   } else {
//     alert("Please choose again, incorrect choice chosen");
//     return userInput();
//   }
// };

// console.log(playerSelection);

// function getComputerChoice() {
//   let options = ["rock", "paper", "scissors"];
//   let computerChose = [Math.floor(Math.random() * options.length)];
//   let chosen = options[computerChose];
//   return chosen;
// }

// console.log(computerSelection);




function playRound() {
  let playerSelection = prompt("Choose Rock, Paper, or Scissors");
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
  alert("Please choose again, incorrect choice chosen");
  return playRound();
  }

  const options = ["rock", "paper", "scissors"];
  let computerSelection = options[Math.floor(Math.random() * options.length)];
  let result;

  if (playerSelection === computerSelection) {
    result = "tie";
  } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
             (playerSelection === "paper" && computerSelection === "rock") || 
             (playerSelection === "scissors" && computerSelection === "paper")) {
    result = "win";
  } else {
    result = "lose";
  }
  return result;
};

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    const result = playRound();
    if (result === "win") {
      playerScore++;
      alert(`You win round ${i}!`);
    } else if (result === "lose") {
      computerScore++;
      alert(`Computer wins round ${i}!`);
    } else {
      alert(`Round ${i} is a tie.`);
    }
  }
  if (playerScore > computerScore) {
    alert(`You win the game! Final score: You ${playerScore}, Computer ${computerScore}.`);
  } else if (playerScore < computerScore) {
    alert(`Computer wins the game! Final score: You ${playerScore}, Computer ${computerScore}.`);
  } else {
    alert(`The game is a tie! Final score: You ${playerScore}, Computer ${computerScore}.`);
  }
}

let playGame = game();
console.log(playGame);
