'use strict';

// todo E1 Primitive Types
// let lName = 'John';
// let lName2 = lName;
// lName = 'David';

// console.log(`🚀  lName =>`, lName);
// console.log(`🚀  lName2 =>`, lName2);

// todo E2 Reference Types
const john = {
  name: 'John',
  age: 30,
};

const david = Object.assign({}, john);
david.name = 'David';

console.log(`🚀  john =>`, john);
console.log(`🚀  david =>`, david);
