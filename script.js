'use strict';

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

const temp = Object.keys(jonas);
console.log(`🚀  temp =>`, temp);

const temp2 = Object.values(jonas);
console.log(`🚀  temp =>`, temp2);

const temp3 = Object.entries(jonas);
console.log(`🚀  temp =>`, temp3);

for (let [key, value] of temp3) {
  console.log(`🚀Key:Value => ${key} : ${value}`);
}
