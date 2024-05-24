console.log(window);
console.log(this);

console.log(this === window);

window.firstName = "HuXn";
this.lastName = "WebDev";

let fullName = function () {
  console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
};

fullName();

// --------------------------

// --------------------------
// Using "this" in object
const obj = {
  name: "HuXn",
  lastName: "WebDev",
  fullName: function () {
    // this keyword will now refer to the owner obj which in this case is
    // the (obj)
    // return this;
    console.log(this);
    return `${this.name} ${this.lastName}`;
  },
};

const res = obj.fullName();
console.log(res);
// --------------------------

// --------------------------
// Using "this" in Function
function callThis() {
  return this;
}

const res2 = callThis();
console.log(res2);
// --------------------------

// --------------------------
// using "this" keyword in arrow method
const obj2 = {
  name: "John",
  regularFunction: function () {
    return this;
  },
  arrowFunction: () => this,
};

console.log(obj2.regularFunction()); // Output: 'John'
console.log(obj2.arrowFunction()); // Output: undefined
// --------------------------

// --------------------------
let huxn = {
  firstName: "HuXn",
  lastName: "WebDev",
  fullName: function () {
    // let firstName = "HuXn";
    // let lastName = "WebDev";
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};

huxn.fullName();
// --------------------------------------------------------------------------------------------------------
// exercise

// Create a person object and store your name & age
// -> Also create a method name (greetRegular) by using a regular function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`
// -> Create one more method name (greetArrow) using arrow function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`

let name = "Kavita";
let age = 40;

let person = {
  name: "Aditya Boghara",
  age: 23,

  greetRegular: function () {
    return `Hello, my name is ${this.name} & I'm ${this.age} years old.`;
  },
  greetArrow: () => {
    return `Hello, my name is ${this.name} & I'm ${this.age} years old.`;
    // return this;
  },
};

console.log(person.greetRegular());
console.log(person.greetArrow());
console.log(this);
