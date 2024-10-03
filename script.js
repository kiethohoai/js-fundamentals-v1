'use strict';

const flight = 'AA123';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) alert('Checked in');
  else alert('Wrong passport!');
};
checkIn('AA123', jonas);
console.log(`🚀  flight =>`, flight);
console.log(`🚀  jonas =>`, jonas);
