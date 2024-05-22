////////////////////////////////////////////////
// When we call the forEach helper we pass in anonymous callback function,
// This function gets called one time for every element in the array
// Whatever is inside the function that logic happens
// let colors = ["teal", "blue", "red", "green"];

// // for (var i = 0; i < colors.length; i++) {
// //     console.log(colors[i]);
// // }

// colors.forEach((color) => console.log(color));

// /////////////////////////////////////////////////
// // const words = ["hello", "bird", "table", "football", "pipe", "code"];

// const capWords = words.forEach((word, index, arr) => {
//   arr[index] = word[0].toUpperCase() + word.substring(1);
// });

// console.log(words);

// // 1. Create an array of numbers.
// // let numbers = [1, 2, 3, 4, 5];

// // 2. Create a variable to hold the sum.
// let sum = 0;

// // 3. Create the adder function which takes the parameter of number & add that with sum variable.

// // 4. Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach
// // numbers.forEach((num) => (sum += num));

// // 5. print the sum variable.
// console.log(sum);

// // ------------------------------Map Helper ------------------------------------
// // The map() method creates a new array populated with the results of calling a provided function
// // on every element in the calling array.

// let numbers = [1, 2, 3, 4, 5];

// // So here what's going on, each number in the numbers array is being passed
// // --> Into anonymous function that we're passing in,
// // --> Whatever this function returns is placed into a new array,
// // --> After each elements has being processed that new array is return.
// let double = numbers.map((num) => num * 2);
// console.log(double);
// // -----------------

// // -----------------
// let peoples = [
//   { firstName: "Macom", lastName: "Reynolds" },
//   { firstName: "Kaylee", lastName: "Frye" },
//   { firstName: "Jayne", lastName: "Cobb" },
// ];

// const results = peoples.map((person, index) => {
//   return [person.firstName, person.lastName, index];
// });

// console.log(results);
// // -----------------

// // 1. Create array with random numbers.
// // 2. Map over each item in that array, & multiply each item by 10

// const num = [19, 24, 556, 234, 52, 121];

// let res = num.map((n) => n * 10);
// console.log(res);
// ------------------------Filter method ------------------------------

// The filter() method is a built-in array method in JavaScript that allows you to create a new array containing elements that pass a certain condition. It provides a clean and concise way to filter out elements from an array based on a specified criteria.

// const songs = [
//   { name: "Lucky You", duration: 4.34 },
//   { name: "Just Like You", duration: 3.23 },
//   { name: "The Search", duration: 2.33 },
//   { name: "Old Town Road", duration: 1.43 },
//   { name: "The Box", duration: 5.23 },
// ];

// // We take an element from our source array & we pass it into our iterator function
// // --> that iterator function has to return either a truthy or falsy value
// // --> if it returns truthy value it will be included in a result array
// // --> if it returns falsy value however, this new value will not be included in the new array
// console.log(songs.filter((song) => song.duration > 3));

// // Ex. 2
// const computers = [
//   { ram: 4, hdd: 100 },
//   { ram: 8, hdd: 200 },
//   { ram: 16, hdd: 300 },
//   { ram: 32, hdd: 400 },
// ];

// console.log(computers.filter((com) => com.ram > 16));

// // 1. Iterate over "ages" array
// // 2. Print only adults, those whos age is greater then 18

// const ages = [32, 33, 16, 40];

// const resu = ages.filter((age) => age >= 18);

// console.log(resu);
// // ---------------------

// // ---------------------
// // 1. Iterate Over "words" array
// // 2. Print only those words which length is greater then 6

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// const r = words.filter((word) => word.length > 6);

// console.log(r);

// ------------------------Every and some method ------------------------------

//////////////////////////////////////////
// // The every() and some() are two built-in array methods in JavaScript that allow you to check the elements
// of an array based on a given condition. Both methods take a callback function as an argument, which is applied
// to each element of the array.

// // The every() method tests whether all elements in the array pass the condition specified by the provided
// callback function. It returns true if the callback function returns true for every element, and false if any
// element fails the condition.

// // The some() method tests whether at least one element in the array passes the condition specified by the
// provided callback function. It returns true if the callback function returns true for at least one element,
// and false if no element passes the condition.

//////////////////////////////////////////

// const peoples = ["huxn", "jordan", "alex", "ad"];

// const res = peoples.every((people) => people.length === 4);
// const res2 = peoples.some((people) => people.length < 3);

// console.log(res);
// console.log(res2);

// //////////////////////////////////////////
// const songs = [
//   { name: "Lucky You", duration: 4.34 },
//   { name: "Just Like You", duration: 3.23 },
//   { name: "The Search", duration: 2.33 },
//   { name: "Old Town Road", duration: 1.43 },
//   { name: "The Box", duration: 5.23 },
// ];

// const everyRes = songs.every((song) => song.duration > 3);
// const someRes = songs.some((song) => song.duration > 3);
// console.log(everyRes);
// console.log(someRes);

// // REFACTOR -> USE EVERY & SOME HELPERS
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];

// let allProductsBooks = true;
// let someProductsBooks = false;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category != "Books") {
//     allProductsBooks = false;
//   } else {
//     someProductsBooks = true;
//   }
// }
// console.log(allProductsBooks);
// console.log(someProductsBooks);
// ---------------------------

// ---------------------------
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];

// do all products have a category of Books
// let allProductsBooks = products.every(function (product) {
//   return product.category === "Books";
// });

// do any products have a category of Books
// let someProductsBooks = products.some(function (product) {
//   return product.category === "Books";
// });

// console.log(allProductsBooks);
// console.log(someProductsBooks);
// ---------------------------

// ------------------------------------------------------Find method ------------------------------------------------------

// The find() method is another built-in array helper in JavaScript that allows you to find
//  the first element in an array that matches a specific condition. It returns the value of the first element
//  that satisfies the given testing function, or undefined if no element is found.

// ------------------------------
// const peoples = [
//   { name: "huxn", age: 17 },
//   { name: "john", age: 18 },
//   { name: "alex", age: 20 },
//   { name: "jimmy", age: 30 },
//   { name: "alex", age: 30 },
// ];

// const res = peoples.find((person) => person.name === "alex");
// // const filterRes = peoples.filter(person => person.name === 'alex')
// // console.log(filterRes);
// console.log(res);
// // ------------------------------

// // ------------------------------
// const posts = [
//   { id: 1, content: "Good Post" },
//   { id: 2, content: "funny Post" },
//   { id: 3, content: "sad Post" },
//   { id: 4, content: "funny Post" },
// ];

// const postRes = posts.find((post) => post.content == "funny Post");
// console.log(postRes);
// ------------------------------

// -------------------------------
// 1. Iterate over "ages" array
// 2. Print only those ages which is greater then 18
const ages = [3, 10, 18, 20];

const res = ages.find((age) => age > 18);
console.log(res);

// -------------------------------
// BONUS => REFACTOR
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];
// let product;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category === "Books") {
//     product = products[i];
//     break;
//   }
// }
// console.log(product);

// -------------------
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

const product = products.find((p) => {
  return p.category == "Books";
});

console.log(product);

// --------------------------------------Reduce helper ---------------------------------------------------------

// The "reducer" method executes a reducer function for array element.
// The "reducer" method returns a single value: the function's accumulated result.
// The "reducer" method does not execute the function for empty array elements.
// The "reducer" method does not change the original array.

// array.reducer(function(total, currentValue, currentIndex, arr), initialValue)

// ------------------------------------
// Example 1
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((p, c) => {
  console.log(`Previous: ${p}`);
  console.log(`Current: ${c}`);
  return p + c;
  // p value: 0
  // c value: [numbers array]

  // reduce function will run for every item in the array, basically this is what's gonna happen
  // 0 + 1 => 1
  // 1 + 2 => 3
  // 3 + 3 => 6
  // 6 + 4 => 10
  // 10 + 5 => 15
}, 0);

console.log(sum);
// ------------------------------------

// ------------------------------------
// Example 2
const people = [
  {
    name: "HuXn WebDev",
    age: 18,
  },
  {
    name: "Alex Mead",
    age: 29,
  },
  {
    name: "Brain Griffin",
    age: 40,
  },
];

// Ternary Operator
const oldestAge = people.reduce((p, c) => (c.age > p ? c.age : p), 0);
console.log(oldestAge);
// ------------------------------------

// -------------------------------------
// Example 3
const words = [
  "apple",
  "banana",
  "orange",
  "banana",
  "apple",
  "orange",
  "apple",
  "grape",
];

const wordFrequency = words.reduce((frequencyMap, word) => {
  frequencyMap[word] = (frequencyMap[word] || 0) + 1;
  return frequencyMap;
}, {});

console.log(wordFrequency);
// -------------------------------------

// -------------------------------------
// Write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all the numbers in the array.

// Write the calculateProduct function using the reduce() method to achieve this task.

// Something like this 👇
const numbe = [2, 3, 4, 5];

// const product = calculateProduct(numbers);
// console.log(product); // 120
// -------------------------------------

// Solution

function calculateProduct(arr) {
  const resu = arr.reduce((res, val) => {
    res = res * val;
    return res;
  }, 1);

  return resu;
}

console.log(calculateProduct(numbe));
