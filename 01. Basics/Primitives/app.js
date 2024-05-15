// primitive types

// Number

var num = 9879;
var num = -98;
var num = 10.9;

console.log(num);

// Type checking

console.log(typeof num);

// operator in javascript
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);
console.log(num++);
console.log(num--);

// Exercise

// 1. Create Variable name (firstFavNum) & store your favorite number.
// 2. Create Variable name (secondFavNum) & store your second fav number.
// 3. Add (firstFavNum & secondFavNumber).
// 4. Subtract (firstFavNum & secondFavNumber).
// 5. Multiply (firstFavNum & secondFavNumber).
// 6. Divided (firstFavNum & secondFavNumber).
// 7. Check (firstFavNum Mod secondFavNumber)
// 8. Check the power of (firstFavNum)

let firstFavNum = 21;
let secondFavNum = 7;

console.log(firstFavNum + secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum % secondFavNum);
console.log(firstFavNum ** secondFavNum);

// Booleans -->  working with true and false value
let isTrue = true;
console.log(!isTrue);

let isNAN = NaN;

console.log(isNAN);

let number = 100;

console.log(number + undefined);

// -------------falsy values---------------

// false
// null
// undefined
// 0
// -0
// NaN
// '', "", ``, (empty strings)

// ----------------------------Exercide ----------------------------//
// 1. Create Variable name (isJsProgrammingLanguage) & store true as a value.
// 2. Create variable name (isJsHard) & store false as a value.
// 3. Create variable name (favNumb) & store your favorite number inside.
// 4. Now Add favNumber with the value of undefined.

let isJsProgrammingLanguage = true;
let isJsHard = false;
let favNumb = 21;
console.log(isJsProgrammingLanguage);
console.log(isJsHard);
console.log(favNumb + undefined);

// -------------------------Comparision operator------------------------------
// ***********************************
// RELATIONAL OPERATORS
// > Greater Then
// < Less Then
// >= Greater Then or equal to
// <= Less Then or equal to

console.log(10 > 10); //false
console.log(10 < 10); //false
console.log(10 >= 10); //true
console.log(10 <= 10); //truw

// ***********************************
// EQUALITY OPERATORS
// === strict equality (Type + Value)
// !== strict non-equality (Type + Value)
// == Lose equality (values)
// != Lose equality (values)

console.log(10 === 10); //true
console.log(10 !== 10);
console.log(10 == 10);
console.log(10 != 10);

// ----------------------------------Exercise----------------------------------
// 1. Create variable name (firstFavNumb) & store your favorite number.
// 2. Create variable name (secondFavNumb) & store second fav Number.
// 3. Check (firstFavNumb is greater then secondFavNumb)
// 4. Check (firstFavNumb is less then secondFavNumb)
// 5. Check (firstFavNumb is greater then & equal to secondFavNumb)
// 6. Check (firstFavNumb is less then & equal to secondFavNumb)
// 7. Check (firstFavNumb is equal to secondFavNumb) using strict equality operator.
// 8. Check (firstFavNumb is equal to secondFavNumb) using loose equality operator.
// 9. Check (firstFavNumb is not equal to secondFavNumb) using strict non-equality operator.
// 10. Check is (firstFavNumb is not equal to secondFavNumb) using loose non-equality operator.

let firstFavNumb = 21;
let secondFavNumb = 10;

console.log(firstFavNumb > secondFavNumb);
console.log(firstFavNumb < secondFavNumb);
console.log(firstFavNumb >= secondFavNumb);
console.log(firstFavNumb <= secondFavNumb);

console.log(firstFavNumb === secondFavNumb);
console.log(firstFavNumb !== secondFavNumb);
console.log(firstFavNumb == secondFavNumb);
console.log(firstFavNumb != secondFavNumb);

// Srings

// let firstName = "HuXn";
// let lastName = "WebDev";
// var fullName = firstName + lastName;
// console.log(fullName);

// // 1. CONCATENATION
// let fullName = firstName + " " + lastName;
// let fullName = firstName.concat(lastName);

// // 2. APPEND
// firstName += " something else";

// // 3. LENGTH
// console.log(firstName.length);

// // 4. CASES
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());

// // 5. SLICE
// console.log(fullName.slice(0, 3));

// // 6. SPLIT & JOIN
// console.log(fullName.split("").join("-"));

// // 7. INCLUDES
// console.log(fullName.includes("HuXn"));

// // 8. TRIM
// console.log(fullName.trim());

// _____________________Exercise_________________________

// 1. Create variable name (favActorFirstName) & store your fav Actor name.
// 2. Create variable name (favActorLastName) & store the last name of (FA).
// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
// 7. Now Log your Message.

let favActorFirstName = "Dwayne";
let favActorLastName = "Johnson";
let fullName = favActorFirstName + " " + favActorLastName;
let uppercase = fullName.toUpperCase();
let message = `My Favorite Actor is ${uppercase}, `;
message += `his best show is silicon valley`;
console.log(message);

// -------Converstion ---------

let amount = 100;
let money = "100";
let floatValue = "99.5";

// - Convert string to number
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount)

//  - Convert number to string
// money = money.toString();
// money = String(money);

// - Change string to decimal
floatValue = parseFloat(floatValue);
console.log(floatValue);
