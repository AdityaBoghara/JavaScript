// Classes are one of the features introduced in the ES6 version of JavaScript.
// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house.

// Since many houses can be made from the same description, we can create many objects from a class.

// Class Declaration
class Person {
  constructor(firstName, lastName, age) {
    // Instance Members
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.printUserInfo = function () {
      return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
    };
  }
  // Prototype Members
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// const alex = new Person("Alex", "Mead", 19);
// console.log(alex);
// console.log(alex.printUserInfo());

// Inheritance
class Programmer extends Person {
  constructor(firstName, lastName, age, pl, experience) {
    super(firstName, lastName, age); // This just calls the parent class constructor
    this.pl = pl;
    this.experience = experience;
  }
}

const john = new Programmer("John", "Doe", 19, "JavaScript", 12);
console.log(john);
console.log(john.greeting());

// 1. Create a class name "Hero", properties (name, level)
// 2. Create greet method which will just greet
// 3. Create Instance of "hero" class
// 4. Create New class name "Mega", inherit properties from "hero" class & provide property of spell
// 5. Create instance of "Mega" class

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  greet() {
    return `${this.name} says hello.`;
  }
}

const hero1 = new Hero("Varg", 1);
console.log(hero1.greet());

class Mage extends Hero {
  constructor(name, level, spell) {
    super(name, level);
    this.spell = spell;
  }
  greet() {
    return `${this.name} says hello. My level is ${this.level} and special power is ${this.spell}`;
  }
}

const hero2 = new Mage("Lejon", 2, "Magic Missile");

console.log(hero2);
