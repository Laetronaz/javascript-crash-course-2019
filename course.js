//console.log('Hello World');
//console.error('This is an error');
//console.warn('This is a warning');

// var, let, const
// var global level
// let and const block level

// let can be reassigned
// let score = 30;
// score = 31;
// console.log(score);

// const cannot be re-assigned
// const age = 30;
// age = 31;
// console.log(age);

// String, Numbers, Boolean, null, undefined
// const name = "John";
// const age = 30;
// const isCool = false;
// const rating = 4.5;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isCool);
// console.log(typeof rating);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// Strings
// const name = "John";
// const age = 31;

// // Concatenation
// console.log("My name is " + name + " and I am " + age);
// // Template String
// console.log(`My name is ${name} and I am ${age}`);

// const s = "Hello World";
// console.log(s.length);
// console.log(s.toLocaleUpperCase());
// console.log(s.substring(0, 5));
// console.log(s.split(""));

// const tags = "technology, computers, it, code";
// console.log(tags.split(", "));

//todoss - variables that hold multiples values
// const numbers = new todos(1, 2, 3, 4, 5, 6);
// console.log(numbers);

// const fruits = ["Apples", "Oranges", "Pears"];
// console.log(fruits);

// console.log(fruits[1]);

// fruits[3] = "Grapes";
// fruits.push("Bannanas");
// fruits.unshift("Strawberries");

// fruits.pop();

// console.log(todos.istodos("Hello"));
// console.log(fruits.indexOf("Pears"));
// console.log(fruits);

//Object Literals
const person = {
  firstName: "John",
  lastnName: "Doe",
  age: 40,
  hobbies: ["music", "movies", "sports"],
  address: {
    steet: "50 Main Street",
    city: "Boston",
    state: "NA"
  }
};

// console.log(person.hobbies[1]);
// console.log(person.address.city);

// Deconstructing
// const {
//   firstName,
//   lastName,
//   address: { city }
// } = person;
// console.log(firstName);
// console.log(city);

// person.email = "John@gmail.com";
// console.log(person);

const todos = [
  { id: 1, text: "Take out trash", isCompleted: true },
  { id: 2, text: "Talk to boss", isCompleted: false },
  { id: 3, text: "Dentist appointement", isCompleted: false }
];

// console.log(todos[1].text);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// For Loops
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let todo of todos) {
//   console.log(todo.text);
// }

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// While Loop
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// forEach, map, filter
// todos.forEach(function(todo) {
//   console.log(todo.text);
// });

// const todoText = todos.map(function(todo) {
//   return todo.text;
// });

// const todoCompleted = todos
//   .filter(function(todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function(todo) {
//     return todo.text;
//   });
// console.log(todoCompleted);

// Conditionals
// const x = 11;
// const y = 11;
// does not check type
// if (x == 10) {
//   console.log("x is 10");
// } else if (x > 10) {
//   console.log("x is gretter than 10");
// } else {
//   console.log("x is less than 10");
// }

// if (x > 5 || y > 10) {
//   console.log("x is more than 5 or y is more than 10");
// }

// if (x > 5 && y > 10) {
//   console.log("x is more than 5 and y is more than 10");
// }

// check type
// if (x === 10) {
//   console.log("x is 10");
// }

// ternary operator

// const x = 10;

// const color = x > 10 ? "red" : "blue";
// console.log(color);

// Switch

// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("color is not red or blue");
//     break;
// }

// fucntions

// const addNums = (num1 = 1, num2 = 1) => num1 + num2;

// console.log(addNums(3, 4));
// console.log(addNums());

// Object Oriented Programming

// Constructor function ES5
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   this.getBirthYear = function() {
//     return this.dob.getFullYear();
//   };
//   this.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

// Person.prototype.getBirthYear = function() {
//   return this.dob.getFullYear();
// };

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };
// instantiare object
// person1 = new Person("John", "Doe", "4-3-1980");
// person2 = new Person("Mary", "Smith", "3-6-1970");

// console.log(person1);
// console.log(person2.firstName);
// console.log(person2.dob.getFullYear());
// console.log(person1.getBirthYear());
// console.log(person2.getFullName());

// Constructor function ES6
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// person1 = new Person("John", "Doe", "4-3-1980");
// person2 = new Person("Mary", "Smith", "3-6-1970");

// console.log(person1);
// console.log(person2.firstName);
// console.log(person1.getBirthYear());
// console.log(person2.getFullName());
