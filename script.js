'use strict';

const calcAge = function (birthYear) {
  const age = 2037 - birthYear;
  return age;
};

const year = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(year(1991, 'Jonas'));
