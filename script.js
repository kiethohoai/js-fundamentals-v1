//013 Dot vs. Bracket Notation

const john = {
  name: 'John',
  age: 32,
  city: 'Miami',
  friends: ['Michael', 'Steven', 'Peter'],
};

// console.log('🚀  john =>', john);
// console.log('🚀  john.name =>', john['name']);
// console.log('🚀  john.age =>', john['age']);
// console.log('🚀  john.city =>', john['city']);

// const data = prompt("What do you want to know about John? Choose between 'name', 'age' or 'city'");

// if (john[data]) {
//   console.log('🚀  john[data] =>', john[data]);
// } else {
//   console.log('Wrong request! Choose between "name", "age" or "city"');
// }

// john.address = 'Thua Thien Hue';
// john['address'] = 'Thua Thien Hue';
// const address = 'address';
// john[address] = 'Thua Thien Hue';
// console.log('🚀  john =>', john);

console.log(
  `John have ${john.friends.length} friends and his best friend is ${john.friends[0]}.`,
);
