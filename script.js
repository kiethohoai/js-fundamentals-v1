'use strict';

const r1 = calAge1(1997);
console.log('🚀  r1 =>', r1);

// Function Declaration
function calAge1(birthYear) {
  return 2037 - birthYear;
}

// Expressing Function
const calAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const r2 = calAge2(1994);
console.log('🚀  r2 =>', r2);
