'use strict';

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `${fName} & you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${fName}`;
      console.log(`🚀  str =>`, str);
    }
    console.log(`🚀  millenial =>`, millenial);

    function add(a, b) {
      return a + b;
    }
    console.log(`🚀  add(a, b) =>`, add(5, 5));
  }

  printAge();
  return age;
}

const fName = 'John';
calcAge(1994);
