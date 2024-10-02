'use strict';

const r1 = {
  name: 'Mina',
  numGuest: 0,
};

const r2 = {
  name: 'MiNi',
  owner: 'Giorgio Rossi',
};

r1.numGuest = r1.numGuest ??= 10;
r2.numGuest = r2.numGuest ??= 10;

console.log(r1);
console.log(r2);
