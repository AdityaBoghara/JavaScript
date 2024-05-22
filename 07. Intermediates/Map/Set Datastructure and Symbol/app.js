// -------------------------------------------------------

// Map is a built-in data structure introduced in (ES6) that allows you to store key-value pairs where both
// the keys and values can be of any data type. It is similar to an object, but with a few key differences:

// -> Keys can be of any data type: Unlike objects, where keys are limited to strings and symbols, Map allows
// you to use any data type as keys, including numbers, booleans, objects, and even other Map instances.

// -> Maintains insertion order: Map preserves the order of key-value pairs as they were inserted, while object
// keys may not be guaranteed to be in a specific order.

// -> Iteration: Map provides built-in methods for easy iteration over its elements.

// The syntax to create a Map is as follows:
// const myMap = new Map();

// You can also initialize a Map with an array of key-value pairs using the Map constructor:
// const myMap = new Map([
//   [key1, value1],
//   [key2, value2],
// ]);

// Here, key1, key2, etc., can be any data type, and value1, value2, etc., can be any value associated with the
// respective keys.

// Map provides various methods for managing and accessing its elements, such as set(), get(), has(), delete(),
// clear(), and more.

// Map is a powerful data structure in JavaScript, and it provides a flexible and efficient way to manage key-value
// data with various data types as keys.

// -------------------------------------------------------

const map = new Map();

const keyOne = "string";
const keyTwo = { a: 2 };
const keyThree = function () {};

map.set(keyOne, "Value of key one");
map.set(keyTwo, "Value of key two");
map.set(keyThree, "Value of key three");

console.log(map);

console.log(map.get(keyOne));
console.log(map.get(keyTwo));
console.log(map.get(keyThree));

console.log(map.keys());
console.log(map.values());
// console.log(map.delete(keyTwo));
console.log(map.size);

// Iterating Over Map
for (let [key, value] of map) {
  console.log(`${key} -- ${value}`);
}

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

// 1. Create a new Map
// 2. Set these properties  ("a", "b", "c")
// 3. Set these values (1, 2, 3)
// 4. Get "a" from that map
// 5. Check the size of that map
// 6. Delete the property "b" & then check the size.

const m = new Map();

m.set("a", 1);
m.set("b", 2);
m.set("c", 3);

console.log(m.get("a"));
// expected output: 1

console.log(m.size);
// expected output: 3

m.delete("b");

console.log(m.size);

// ---------------------------------- Set Data structure----------------------------------

// -------------------------------------------------
// Set is a built-in data structure introduced in (ES6) that represents a collection of unique values.
// Unlike arrays, Set allows you to store only unique values, which means duplicate values are automatically removed.
//  Each value can occur only once within a Set.

// Set objects are useful when you need to store a list of unique elements and quickly check for the existence of a
// specific value.

// const mySet = new Set(); // empty set
// const initialValues = [1, 2, 3];
// const mySet = new Set(initialValues); // list added

// const mySet = new Set();

// mySet.add("apple");
// mySet.add("banana");
// mySet.add("orange");
// mySet.add("apple"); // Duplicate value; will be ignored

// console.log(mySet); // Set(3) { 'apple', 'banana', 'orange' }

// console.log(mySet.has("banana")); // true
// console.log(mySet.has("grape")); // false

// mySet.delete("orange");
// console.log(mySet); // Set(2) { 'apple', 'banana' }

// mySet.clear();
// console.log(mySet); // Set(0) {}
// -------------------------------------------------

const set = new Set();

set.add(true);
set.add("string");
set.add({ name: "huxn" });
set.add(10);

console.log(`here ${set}`);
console.log(set);

console.log(set.size);
console.log(set.keys());
console.log(set.has({ name: "huxn" }));

set.delete(10);
console.log(set);

// Iterating over sets.
for (let item of set) {
  console.log(item);
}

// 1. Create a Set name (letters)
// 2. Add ("a", "b", "c") as properties
// 3. Add ("a", "b", "c") as values
// 4. Iterate over Set & log the values.

// -------------------------------
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// Create Variables
const a = "a";
const b = "b";
const c = "c";

for (let value of letters) {
  console.log(value);
}

// ---------------------------------------- Symbol ----------------------------------------
// Symbol is a unique and immutable primitive data type introduced in ECMAScript 6 (ES6).
// A symbol is often used as an identifier for object properties to avoid potential naming conflicts.

// Unlike strings or numbers, symbols are guaranteed to be unique. When you create a symbol,
// it is unique and cannot be recreated or changed. This uniqueness ensures that symbols will not collide with other
// property names, even if they have the same string representation.

// -----------------------
// const mySymbol = Symbol();
// const mySymbol = Symbol("My custom symbol");
// -----------------------

// const mySymbol1 = Symbol();
// const mySymbol2 = Symbol("My custom symbol");

// const obj = {};

// obj[mySymbol1] = "Value 1";
// obj[mySymbol2] = "Value 2";

// console.log(obj); // Output: { [Symbol()] : "Value 1", [Symbol(My custom symbol)] : "Value 2" }
// console.log(obj[mySymbol1]); // Output: "Value 1"
// console.log(obj[mySymbol2]); // Output: "Value 2"

const symbol1 = Symbol("name");
const symbol2 = Symbol("name");

console.log(symbol1);
console.log(typeof symbol1);
console.log(symbol1 === symbol2);

const huxn = {};
huxn.age = 17;
huxn["gender"] = "male";
huxn["gender"] = "female";
huxn[symbol1] = "Alex";
huxn[symbol2] = "John";
console.log(huxn);

// 1. Create a symbol provide a value of "foo"
// 2. Check the type of that symbol.
// 3. Create empty object
// 4. Store symbol as the property to that object.
// 5. Iterate over Symbol.

const sym = Symbol("foo");

let symObj = Object(sym);
console.log(typeof symObj); // "object"

console.log(typeof sym);

obj1 = {};

obj1[Symbol("a")] = "alpha";
obj1[Symbol("b")] = "beta";
obj1[Symbol("c")] = "charlie";

// console.log(obj1);

console.log(obj1);

for (let i in obj1) {
  console.log(i); // logs "c" and "d"
}
