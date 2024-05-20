// -------------------------------
// A function is a block of code that performs a specific task.
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.
// DRY - Don't Repeat Yourself
// function name(parameterIfAny) {...}

// -------------------------------
// declaring a function named greet()
// calling function

// -------------------------------
function sayHello(username) {
  console.log(`Hello ${username}`);
}

sayHello("HuXn"); // calling function
// -------------------------------
// The return statement can be used to return the value to a function call.
function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
  // console.log("Hello World"); NOTHING
}

const result = add(10, 20);
console.log(result);
// -------------------------------

// Declaration and expression

// this is declaration
function greet() {
  console.log("Hello there");
}

greet();

// function expression
const greeting = function (user) {
  console.log(`Hello ${user}`);
};

greeting("john");

// ------------------------Call back function------------------------
// When we provide function as an (argument) to other function/argument that function is known as callback function.

// callback(function() {...})

// -------------------------------
function showCallFunc(fn) {
  const value = 10;
  fn(value);
}

showCallFunc(function (value) {
  console.log(value);
});

// -------------------------------
// // function
// function greet(name, cb) {
//   console.log(`Hello ${name}`);
//   cb();
// }

// // callback function
// function callMe() {
//   console.log("I am callback function");
// }

// // passing function as an argument (callback)
// greet("Peter", callMe);
// -------------------------------

// Exercise

// 1. Create a function name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holds value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

function showCallFunc(fn) {
  let val = 100;
  fn(val);
}

showCallFunc(function (val) {
  console.log(val);
});

// --------------------------------------------------------------

// Scopes
// Global Scope
// Local Scope

let textMessage = "hi"; // Global Scope

function showMessage() {
  let textMessage = "hi"; // Local Scope
  console.log(textMessage); // Access Local Scope
}

for (let i = 0; i < 5; i++) {
  console.log(i); // Local Scope
}

console.log(i); // Global Scope
console.log(textMessage); // Access Global Scope

// Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.

// The two types of scope are local and global

// Global variables are those declared outside of a block.

// Local variables are those declared inside of a block.

// --------------------------------------------------------------
// a method is a function that is associated with an object. It allows objects to perform actions or provide functionalities.

// ------------------------------------
// Defining a method outside the object
// function greet() {
//   return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
// }

// const person = {
//   name: "John",
//   age: 30,
//   greet,
// };

// console.log(person.greet());

// ------------------------------------

const person = {
  name: "HuXn",
  age: 19,
  greet: function greet() {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
  },
};

console.log(person.greet());
// ------------------------------------
