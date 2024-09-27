'use strict';
/////////////////////////////////////
const buttonCheck = document.querySelector('.check');
buttonCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.warn(`🚀  guess =>`, guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
});
