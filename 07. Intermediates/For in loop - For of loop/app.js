// The "for...in" loop in JavaScript is used to iterate over the enumerable properties of an object.
// It is a way to loop through the keys (property names) of an object.

// for (let key in object) {...}

// Here, variable is a variable that will represent each property name (key) during each iteration, and
// object is the object being looped through.

// --------------------------
let person = {
  name: "HuXn",
  age: 17,
  gender: "Male",
};

for (let key in person) {
  console.log(key, person[key]);
}
// --------------------------

// --------------------------
let list = ["one", "two", "three", "four"];

for (let index in list) {
  console.log(`${index}: ${list[index]}`);
}
// --------------------------
const object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  console.log(`${key} , ${object[key]}`);
}

// The "for...of" loop in JavaScript is a modern iteration statement introduced in ECMAScript 6 (ES6) that provides a concise and easy way to loop over elements in iterable objects like arrays, strings, maps, sets, and more. It allows you to iterate directly over the values of the elements, rather than dealing with their indices or keys, which makes the code more readable and less error-prone.

// for (variable of iterable) {...}

// Here, variable is a variable that represents each value of the iterable during each iteration, and iterable is the iterable object being looped through.

let peoples = ["huxn", "alex", "john", "brad"];

for (let people of peoples) {
  console.log(people);
}

// Iterating over String
const text = "Hello";

for (const char of text) {
  console.log(char);
}

// Iterate over "array1" & log the values using for of loop.

const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
