'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//todo displayMovements
//INPUT: movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

//todo createUserName
const createUserName = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);
console.log(`🚀  accounts =>`, accounts);

// TODO 009 Coding Challenge #1
// TEST DATA 1
// const julias = [3, 5, 2, 12, 7];
// const kates = [4, 1, 15, 8, 3];

// TEST DATA 2
// const julias2 = [9, 16, 6, 8, 3];
// const kates2 = [10, 5, 6, 1, 4];

// const checkDogs = function (a1, a2) {
//   const juliasDogs = a1.slice(1, -1);
//   console.log(`🚀  juliasDogs =>`, juliasDogs);

//   const bothDogs = [...a2, ...juliasDogs];
//   const bothDogs2 = a2.concat(juliasDogs);
//   console.log(`🚀  bothDogs =>`, bothDogs);
//   console.log(`🚀  bothDogs2 =>`, bothDogs2);

//   bothDogs.forEach((dog, i) => {
//     if (dog >= 3) console.log(`🚀  Dog number ${i + 1} is an adult, and it is ${dog} years old`);
//     else console.log(`🚀  Dog number ${i + 1} is still a puppy 🐶`);
//   });
// };

// checkDogs(julias, kates);
// checkDogs(julias2, kates2);

//TODO 011 The map Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// const newMovements = movements.map(mov => mov * eurToUsd);
// console.log(`🚀  movements =>`, movements);
// console.log(`🚀  newMovements =>`, newMovements);
