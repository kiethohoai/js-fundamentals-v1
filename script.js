'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 1,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 1,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 1,
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

// Init State of App
// containerMovements.innerHTML = '';

// displayMovements
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  // sort
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
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

// calcDisplayBalance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
  return acc.balance;
};

//calcDisplaySummary
const calcDisplaySummary = function (movements) {
  const income = movements.filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0);
  const outcome = movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur, 0);
  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(int => int > 1)
    .reduce((acc, cur) => acc + cur);

  labelSumIn.textContent = `${income} EUR`;
  labelSumOut.textContent = `${Math.abs(outcome)} EUR`;
  labelSumInterest.textContent = `${interest} EUR`;
};

// createUserName
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

// updateUI
const updateUI = acc => {
  //Display movements
  displayMovements(acc.movements);

  //Display Balance
  calcDisplayBalance(acc);

  //Display summary
  calcDisplaySummary(acc.movements);
};

// test data js1, jd2, stw3, ss4
inputLoginUsername.value = 'js';
inputLoginPin.value = '1';

// User Login
let currentAccount;
btnLogin.addEventListener('click', e => {
  // prevent & show UI
  e.preventDefault();
  containerApp.style.opacity = 100;

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Clear input field
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    // inputLoginUsername.setAttribute('disabled', true);
    // inputLoginPin.setAttribute('disabled', true);
    // btnLogin.setAttribute('disabled', true);

    // Auto fill field (for testing)
    inputTransferTo.value = 'jd';
    inputTransferAmount.value = '500';

    //Display UI & Message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ').at(0)}`;

    //
    updateUI(currentAccount);
  } else {
    labelWelcome.textContent = 'Invalid User or Password!';
  }
});

// User Transfers
btnTransfer.addEventListener('click', e => {
  e.preventDefault();

  // amount & account?
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  console.log(`🚀  amount =>`, amount);
  console.log(`🚀  receiverAcc =>`, receiverAcc);

  if (
    // receiverAcc &&
    amount > 0 &&
    currentAccount.balance > amount &&
    currentAccount.username !== receiverAcc?.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);

    console.log('SUCCESS: VALID TRANFER!');
    // inputTransferTo.value = '';
    // inputTransferAmount.value = '';
  } else {
    console.log('ERROR: INVALID TRANFER');
  }
});

// FILL DATA FOR TESTING
inputCloseUsername.value = 'js';
inputClosePin.value = '1';

// Close Account
btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    //Check conditions
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === +inputClosePin.value
  ) {
    // Find index User & Delete
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  } else {
    alert('INVALID');
  }
});

// User request Loan
btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount?.movements.some(mov => mov >= amount * 0.1)) {
    alert('success');
    // add movement
    currentAccount.movements.push(amount);
    // update UI
    updateUI(currentAccount);

    // reset loan
    inputLoanAmount.value = '0';
  } else {
    alert('fail');
  }
});

// SORT FEATURE
let state = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !state);
  state = !state;
});

// 009 Coding Challenge #1
/* 
TEST DATA 1
const julias = [3, 5, 2, 12, 7];
const kates = [4, 1, 15, 8, 3];

TEST DATA 2
const julias2 = [9, 16, 6, 8, 3];
const kates2 = [10, 5, 6, 1, 4];

const checkDogs = function (a1, a2) {
  const juliasDogs = a1.slice(1, -1);
  console.log(`🚀  juliasDogs =>`, juliasDogs);

  const bothDogs = [...a2, ...juliasDogs];
  const bothDogs2 = a2.concat(juliasDogs);
  console.log(`🚀  bothDogs =>`, bothDogs);
  console.log(`🚀  bothDogs2 =>`, bothDogs2);

  bothDogs.forEach((dog, i) => {
    if (dog >= 3) console.log(`🚀  Dog number ${i + 1} is an adult, and it is ${dog} years old`);
    else console.log(`🚀  Dog number ${i + 1} is still a puppy 🐶`);
  });
};

checkDogs(julias, kates);
checkDogs(julias2, kates2);
 */

// 011 The map Method
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const newMovements = movements.map(mov => mov * eurToUsd);
console.log(`🚀  movements =>`, movements);
console.log(`🚀  newMovements =>`, newMovements);
 */

// 013 The filter Method
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov <= 0);
console.log(`🚀  deposits =>`, deposits);
console.log(`🚀  withdrawals =>`, withdrawals);
const newDeposits = [];
const newWithdrawals = [];
for (let mov of movements) {
  if (mov > 0) newDeposits.push(mov);
  else newWithdrawals.push(mov);
}
console.log(`🚀  newDeposits =>`, newDeposits);
console.log(`🚀  newWithdrawals =>`, newWithdrawals);
console.log(`🚀  movements =>`, movements);
 */

//014 The reduce Method
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(`🚀  balance =>`, balance);

const balance2 = movements.reduce((acc, cur, i, arr) => {
  console.log(`🚀Sum ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(`🚀  balance2 =>`, balance2);

let balance3 = 0;
for (let mov of movements) balance3 += mov;
console.log(`🚀  balance3 =>`, balance3);

const maxValue = movements.reduce((acc, mov) => (acc > mov ? acc : mov), movements[0]);
console.log(`🚀  maxValue =>`, maxValue);
 */

// 015 Coding Challenge #2
/* 
const data = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];
const calcAverageHumanAge = function (ages) {
  // const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  // console.log(`🚀  ages =>`, ages);
  // console.log(`🚀  humanAges =>`, humanAges);

  // const adultsAges = humanAges.filter(age => age >= 18);
  // console.log(`🚀  adultsAges =>`, adultsAges);

  // const averageAge = adultsAges.reduce((acc, cur) => acc + cur, 0) / adultsAges.length;
  // console.log(`🚀  averageAge =>`, averageAge);

  const humanAage2 = ages
    .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter(age => age >= 18)
    .reduce((acc, cur, i, a) => acc + cur / a.length, 0);
  console.log(`🚀  humanAage2 =>`, humanAage2);
};
calcAverageHumanAge(data);
calcAverageHumanAge(data2);
 */

// 016 The Magic of Chaining Methods
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const result = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);
console.log(`🚀  result =>`, Math.trunc(result));
 */

// 018 The find Method
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const res = movements.find(mov => mov >= 1200);
// console.log(`🚀  res =>`, res);

console.log(accounts);
const res2 = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(`🚀  res2 =>`, res2);
 */

// 021 The findIndex Method

// 022 some and every
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const res = movements.some(mov => mov > 0);
console.log(`🚀  res =>`, res);
console.log(movements.every(mov => mov > 2900));
 */

// 023 flat and flatMap
/* 
// ex1
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const a1 = [
  [1, [2, 3]],
  [4, 5, 6],
  [7, 8, [9, 10, [11, 12]]],
];
const a2 = a1.flat();
const a3 = a2.flat();
const a4 = a3.flat();

// ex2
const accountMovements = accounts.map(acc => acc.movements);
const allMovements = accountMovements.flat();
const overalBalance = allMovements.reduce((acc, cur) => acc + cur, 0);

const res = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log(`🚀  res =>`, res);

// Better performance
const res2 = accounts.flatMap(acc => acc.movements).reduce((acc, cur) => acc + cur, 0);
console.log(`🚀  res2 =>`, res2);
 */

// 024 Sorting Arrays
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const res = movements.slice().sort((a, b) => a - b);
 */

// 025 More Ways of Creating and Filling Arrays
/* 
const movUI = Array.from(document.querySelectorAll('.movements__value'), cur => +cur.textContent);
console.log(`🚀  movUI =>`, movUI);

 */
