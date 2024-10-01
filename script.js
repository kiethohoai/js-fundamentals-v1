'use strict';

// SPREAD OPERATOR because the right side of =
const arr = [1, 2, ...[3, 4, 5]];
console.log(`🚀  arr =>`, arr);

// REST PARAMS because the left side of =
const [a, b, ...c] = [1, 2, 3, 4, 5];
console.log(`🚀  a, b =>`, a, b);
console.log(`🚀  c =>`, c);
