'use strict';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let item of arr) {
//   if (item === 2) continue;
//   console.log(`🚀  item =>`, item);
// }

for (let item of arr.entries()) {
  console.log(`🚀  item =>`, item);
}

console.log(...arr.entries());
