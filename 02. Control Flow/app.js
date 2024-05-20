// control flow
// if (condition) {...}
// else if (condition_2) {...}
// else {...}
// ------------------------

let a = 10,
  b = 20;
if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}

// ------------------------
time = 90;

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
// ------------------------

// ------------------------
let password;

if (password === 8) {
  console.log("Welcome");
} else if (password <= 8) {
  console.log("Password is too short");
} else if (password >= 8) {
  console.log("Too long password");
  console.log("Password should be 8 characters");
} else {
  console.log("Please provide a password");
}
// -----------------------------

// --------------------Switch Case----------------------------

// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }

let x = "0";

switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}

// -------------------------------------------------

let day = "monday";

switch (day) {
  case "monday":
    console.log("Today is monday");
    break;
  case "tuesday":
    console.log("Today is tuesday");
    break;
  case "wednesday":
    console.log("Today is wednesday");
    break;
  case "tuesday":
    console.log("Today is thursday");
    break;
  case "friday":
    console.log("Today is friday");
    break;
  case "saturday":
    console.log("Today is saturday");
    break;
  case "sunday":
    console.log("Today is sunday");
    break;
  default:
    console.log("Don't know what day is today!");
}

// ---------------------Loops--------------------------

for (let i = 0; i <= 5; i++) {
  console.log("Hello World", i);
}

// while (condition) {
//   // code block to be executed
// }

// ----------------
let i = 1;

while (i <= 5) {
  console.log("Hello World", i);
  i++;
}
// ----------------

// let i = 1;

do {
  console.log("Hello World", i);
  i++;
} while (i <= 5);

// Infinite loop

// let i = 0;

while (i < 5) {
  console.log("Number: ", i);
  // i++
}

// ----------------------------Logical operator --------------------

// -----------------------------------
// 1. Logical AND (&&)
//  -- TRUE if both the operands/boolean values are true, else evaluates to FALSE
const a = true,
  b = false;
const c = 4;

console.log(a && a); // true
console.log(a && b); // false

console.log(c > 2 && c < 2); // false

// -----------------------------------
// 2. Logical OR (||)
// -- TRUE if either of the operands/boolean values is true. evaluates to false if both are FALSE

console.log(a || b); // true
console.log(b || b); // false
console.log(c > 2 || c < 2); // true

// -----------------------------------
// 3. Logical NOT (!)
// TRUE if the operand is false and vice-versa.
console.log(!a); // false
console.log(!b); // true

// -----------------------------------
let password = "Aditya";

if (password.length >= 8 && password.includes("web")) {
  console.log("VALID PASSWORD");
} else {
  console.log("Invalid password");
}
