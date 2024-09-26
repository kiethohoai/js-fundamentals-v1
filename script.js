// 018 Looping Backwards and Loops in Loops
// const numbers = [1, 2, 3, 4, 5];

// let i = 1;
// while (i <= 10) {
//   console.log('i =', i);
//   i++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log('You rolled a', dice);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log('Loop is about to end...');
}
