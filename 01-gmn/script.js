'use strict';

let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.warn(`🚀  secretNumber =>`, secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🚀NO NUMBER🚀';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🚀CORRECT NUMBER🚀';
    score++;
    document.querySelector('.score').textContent = score;

    // Change background color
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    } //todo Task Here
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '🚀TOO HIGH🚀' : '🚀TOO LOW🚀';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🚀YOU LOSE🚀';
      document.querySelector('.score').textContent = 0;
    }
  }
  // todo End block
});

// if (guess > secretNumber) {
//   if (score === 0) {
//     document.querySelector('.message').textContent = '🚀YOU LOSE🚀';
//   } else {
//     document.querySelector('.message').textContent = '🚀TOO HIGH🚀';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
// } else if (guess < secretNumber) {
//   if (score === 0) {
//     document.querySelector('.message').textContent = '🚀YOU LOSE🚀';
//   } else {
//     document.querySelector('.message').textContent = '🚀TOO LOW🚀';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
// }

const againButton = document.querySelector('.again');
againButton.addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';

  score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = '';

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.warn(`🚀  secretNumber =>`, secretNumber);

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
