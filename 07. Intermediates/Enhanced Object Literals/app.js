// Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for
// defining objects in JavaScript. These enhancements make it more convenient and concise to define object properties
// and methods

function user(name, age, work) {
  return {
    name,
    age,
    work,
    intro() {
      console.log(`My name is ${name} i'm ${age} years old, & i'm a ${work}`);
    },
  };
}

const huxn = user("HuXn", 17, "Programmer");

const adi = user("adi", 24, "Programmer");
huxn.intro();
adi.intro();

var lib = {
  sum: (a, b) => {
    return a + b;
  },
  mult: (a, b) => {
    return a * b;
  },
};

console.log(lib.sum(2, 3)); // 5
console.log(lib.mult(2, 3)); // 6

function getPersionES5(name, age, height) {
  return {
    name,
    age,
    height,
  };
}
console.log(getPersionES5("Zachary", 23, 195));
