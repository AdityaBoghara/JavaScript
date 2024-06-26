//Array -> Zero index based

// -----------------------------------
// An array is an object that can store multiple values at once. For example,
// const words = ["hello", "world", "welcome"];
// ['string', 123, true, []]
// -----------------------------------

// -----------------------------------
// empty array
const myList = [];

// array of numbers
const numberArray = [2, 4, 6, 8];

// array of strings
const stringArray = ["eat", "work", "sleep"];

// array with mixed data types
// const newData = ["work", "exercise", 1, true];
// -----------------------------------
const newData = [
  { task1: "exercise" },
  [1, 2, 3],
  function hello() {
    console.log("hello");
  },
];

// -----------------------------------
// ACCESSING ITEMS
const myArray = ["h", "e", "l", "l", "o"];

// first element
console.log(myArray[0]); // "h"

// second element
console.log(myArray[1]); // "e"

// _____________________________________________________________________________________________________________________
// concat()	joins two or more arrays and returns a result
// includes() checks if an array contains a specified element
// push() adds a new element to the end of an array and returns the new length of an array
// unshift() adds a new element to the beginning of an array and returns the new length of an array
// pop() removes the last element of an array and returns the removed element
// shift() removes the first element of an array and returns the removed element
// sort() sorts the elements alphabetically in strings and in ascending order
// slice() selects the part of an array and returns the new array
// splice() removes or replaces existing elements and/or adds new elements

// concat()
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const children = arr1.concat(arr2);

console.log(children);

// includes()
let text = "Hello world, welcome to the universe.";
let result = text.includes("world");

console.log(result);

// push()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

console.log(fruits);

// unshift()
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
console.log(array1);

// pop()
fruits.pop();

// shift
const array2 = [1, 2, 3];
const firstElement = array2.shift();
console.log(array2);
console.log(firstElement);

// sort()
fruits.sort();
console.log(fruits);

// slice()
const citrus = fruits.slice(1, 3);

console.log(citrus);

// splice()
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 0, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

// -------------------Objects---------------------------

// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.

const car = { type: "Fiat", model: "500", color: "white" };

// Accessing Properties
console.log(typeof car);

// Updating Properties
console.log(car.type);
console.log((car.type = "Toyota"));

// Add new properties
console.log((car.wheels = 4));
console.log(car);
