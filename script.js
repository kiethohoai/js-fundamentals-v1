'use strict';

const john = function test(a, b) {
  console.log(arguments);
  console.log(`🚀  a + b =>`, a + b);
};

john(1, 2);

const john2 = (a, b) => {
  console.log(arguments);
  console.log(`🚀  a + b =>`, a + b);
};

john2(1, 2);
