let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses: 0,
  ties: 0
};

updateScoreElements();

function pickComputerMove() {
  let computerMove = '';
  let randomMove = Math.random();
  if (randomMove >= 0 && randomMove < 1/3) {
    computerMove = 'rock';
  } else if (randomMove >= 1/3 && randomMove < 2/3) {
    computerMove = 'paper';
  } else if (randomMove >= 2/3 && randomMove < 1) {
    computerMove = 'scissors';
  }
  return computerMove;

}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let outcome = '';
  if (playerMove == 'rock') {
    if (computerMove == 'rock') {
    outcome = 'Tie.';
  } else if (computerMove == 'paper') {
    outcome = 'You lose.';
  } else if (computerMove == 'scissors') {
    outcome = 'You win.';
  }

} else if (playerMove == 'paper') {
  if (computerMove == 'rock') {
      outcome = 'You win.';
    } else if (computerMove == 'paper') {
      outcome = 'Tie.';
    } else if (computerMove == 'scissors') {
      outcome = 'You lose.';
    }

} else if (playerMove == 'scissors') {
  if (computerMove == 'rock') {
      outcome = 'You lose.';
    } else if (computerMove == 'paper') {
      outcome = 'You win.';
    } else if (computerMove == 'scissors') {
      outcome = 'Tie.';
    }
}

if (outcome == 'You win.') {
  score.wins += 1;
} else if (outcome == 'You lose.') {
  score.losses += 1;
} else if (outcome == 'Tie.') {
  score.ties += 1;
}

updateScoreElements();

document.querySelector('.js-result').innerHTML = outcome;
document.querySelector('.js-moves').innerHTML = 
`You
<img src="images/${playerMove}-emoji.png" 
class="move-icon">
<img src="images/${computerMove}-emoji.png" 
class="move-icon">
Computer`;

localStorage.setItem('score', JSON.stringify(score));

}

function updateScoreElements() {
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}