// 014 Object Methods

const person = {
  firstName: 'John',
  lastName: 'Ho',
  birthYear: 1994,
  age: undefined,

  getAge: function () {
    return (this.age = 2024 - this.birthYear);
  },

  getSummary: function () {
    return `${this.firstName} ${this.lastName} is ${this.getAge()} years old.`;
  },
};

console.log('🚀  person =>', person);
console.log('🚀  person.getSummary() =>', person.getSummary());
