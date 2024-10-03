'use strict';

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const result = greet('Hey');
// result('John');
// result('Jonas');

// greet('Hello')("David");

const greet = greeting => name => console.log(`${greeting} ${name}`);

const result = greet('Hello');
result('John');
result('Jonas');
greet('Hello')('David');
