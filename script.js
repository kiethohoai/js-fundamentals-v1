'use strict';

const parent = function () {
  let num = 0;

  return function () {
    num++;
    console.log(`🚀  num =>`, num);
    return num;
  };
};

const test = parent();
test();
test();
test();
