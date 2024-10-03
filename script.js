'use strict';

const test = function (name = 'John', age = '30', address = 'Hue') {
  const test2 = {
    name,
    age,
    address,
  };
  console.log(`🚀  test2 =>`, test2);
};

test();
