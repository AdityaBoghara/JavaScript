// --- DESTRUCTURING ---
// Destructuring allows us to "unpack" values from data-structures (Arrays, objects)
// into separate distinct variables.

// --------------------------------
// // Basic variable assignment
// const foo = ["one", "two", "three"];

// const [red, yellow, green] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // "three"
// --------------------------------

// --------------------------------
// const goo = ["one", "two"];

// const [red, yellow, green, blue] = goo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // undefined
// console.log(blue); //undefined
// // --------------------------------

// // --------------------------------
// DEFAULT VALUES
// let a, b;

// [a = 5, b = 7] = [1];
// console.log(a); // 1
// console.log(b); // 7

// // --------------------------------
// Swapping variables
// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

// const arr = [1, 2, 3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); // [1,3,2]
// // --------------------------------

// // --------------------------------
// // Parsing an array returned from a function
// function f() {
//   return [1, 2];
// }

// let a, b;
// [a, b] = f();
// console.log(a); // 1
// console.log(b); // 2
// // --------------------------------

// // --------------------------------
// // Ignoring some returned values
// function f() {
//   return [1, 2, 3];
// }

// const [a, , b] = f();
// console.log(a); // 1
// console.log(b); // 3

// const [c] = f();
// console.log(c); // 1
// // --------------------------------

// // --------------------------------
// // Assigning the rest of an array to a variable
// const [a, ...b] = [1, 2, 3];
// console.log(a); // 1
// console.log(b); // [2, 3]
// --------------------------------

const colors = ["red", "green", "blue", "yellow", "orange"];

// Your task is to use array destructuring to extract the first three colors from the colors array and assign them to separate variables named color1, color2, and color3.

// After extracting the colors, log each variable's value to the console.

const [color1, color2, color3] = colors;
console.log(color1, color2, color3);

// ---------------------------------------------Object Destructuring--------------------------------------

// In object destructuring order doesn't matter but the name does matter

// --------------------------
// Extracting a property
// const student = { name: "HuXn", position: "First", rollno: "27" };
// const { name, position, rollno } = student;
// console.log(name); // HuXn
// console.log(position); // First
// console.log(rollno); // 27
// --------------------------

// const person = {
//   name: "John Doe",
//   age: 30,
//   gender: "male",
//   country: "USA",
// };

// Your task is to use object destructuring to extract the name, age, and country properties from the person object.
// After extracting the properties, log each variable's value to the console.
// const { name, age, country } = person;
// console.log(name);
// console.log(age);
// console.log(country);

// ---------------------------------------------Rename Destructuring--------------------------------------

// --------------------------
// Assigning new variable names
const num = { x: 100, y: 200 };
const { x: new1, y: new2 } = num;

console.log(new1); //100
console.log(new2); //200
// --------------------------

// --------------------------
// Assignment without declaration
// let name, division;
// ({ name, division } = { name: "HuXn", division: "First" });
// console.log(name); // HuXn
// console.log(division); // First
// // --------------------------

// // --------------------------
// Object destructuring and rest operator
// let { a, b, ...args } = { a: 100, b: 200, c: 300, d: 400, e: 500 };
// console.log(a);
// console.log(b);
// console.log(args);
// // --------------------------

// const person = {
//   name: "John Doe",
//   age: 30,
//   gender: "male",
//   country: "USA",
// };

// // Your task is to use object destructuring to extract the name, age, and country properties from the person object and assign them to separate variables named personName, personAge, and personCountry.

// // After extracting the properties, log each variable's value to the console.

// const { name: personName, age: personAge, country: personCountry } = person;
// console.log(personName);
// console.log(personAge);
// console.log(personCountry);

// ---------------------------------------------Function Destructuring--------------------------------------

// -------------------------------
const person = {
  name: "John Doe",
  age: 30,
  country: "USA",
};

function printPersonInfo({ name, age, country }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Country: ${country}`);
}

printPersonInfo(person);
// -------------------------------

// -------------------------------
// Example 2
let options = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

// The (w) & (h) property is essentially renaming the (width) & (height) props

function showMenu({
  title = "Untitled",
  width: w = 100, // width goes to w
  height: h = 200, // height goes to h
  items: [item1, item2], // items first element goes to item1, second to item2
}) {
  console.log(`${title} ${w} ${h}`); // My Menu 100 200
  console.log(item1); // Item1
  console.log(item2); // Item2
}

showMenu(options);
// -------------------------------

// In the showMenu function, renaming the properties to w and h from width and height is done as part of the
// destructuring process. This allows the function to use shorter and more convenient variable names while still
// extracting the corresponding values from the object.

// The main reasons for renaming properties during destructuring are:

// Shorter and More Concise Code: Renaming properties to shorter names can make the code more concise and easier to
// read. In this case, using w and h instead of width and height requires less typing and reduces the visual clutter,
// especially if you use the properties multiple times within the function.

// Avoiding Naming Conflicts: If the function already has variables named width and height, renaming the properties
// during destructuring prevents naming conflicts. This allows you to access the properties from the object without
// overwriting existing variables with the same names.

// Default Value Assignment: Renaming also allows you to assign default values to the renamed variables. In the
// example code, width: w = 100 and height: h = 200 mean that if the width and height properties are missing in the
// object being passed to the function, w will be assigned the default value 100, and h will be assigned the default
// value 200.

// ---------------------------------------------Nested Destructuring--------------------------------------

const data = {
  user: {
    id: 123,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      city: "New York",
      country: "USA",
    },
    hobbies: ["Reading", "Painting", "Cooking"],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ],
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};

// Extracting data using object destructuring
const {
  user: {
    name,
    age,
    address: { city, country },
    hobbies,
    scores: { math, science, history },
    email,
  },
  products: [product1, product2, product3],
  settings: {
    darkMode,
    notifications: {
      email: emailNotifications,
      sms: smsNotifications,
      push: pushNotifications,
    },
    language,
  },
} = data;

// Logging the extracted data using template literals
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Address: ${city}, ${country}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Math Score: ${math}`);
console.log(`Science Score: ${science}`);
console.log(`History Score: ${history}`);
console.log(`Product 1: ${product1.name} - $${product1.price}`);
console.log(`Product 2: ${product2.name} - $${product2.price}`);
console.log(`Product 3: ${product3.name} - $${product3.price}`);
console.log(`Dark Mode: ${darkMode}`);
console.log(`Email Notifications: ${emailNotifications}`);
console.log(`SMS Notifications: ${smsNotifications}`);
console.log(`Push Notifications: ${pushNotifications}`);
console.log(`Language: ${language}`);
