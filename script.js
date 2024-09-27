'use strict';

let score = 2;
document.querySelector('.score').textContent = score;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '🚀NO NUMBER🚀';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🚀CORRECT NUMBER🚀';
    score++;
    document.querySelector('.score').textContent = score;

    // Change background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score === 0) {
      document.querySelector('.message').textContent = '🚀YOU LOSE🚀';
    } else {
      document.querySelector('.message').textContent = '🚀TOO HIGH🚀';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score === 0) {
      document.querySelector('.message').textContent = '🚀YOU LOSE🚀';
    } else {
      document.querySelector('.message').textContent = '🚀TOO LOW🚀';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});
