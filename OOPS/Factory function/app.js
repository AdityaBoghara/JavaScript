// A factory function is a type of function that is used to create and return objects.
// It's a design pattern that provides an alternative way to create objects compared to using constructors
// and the new keyword.

// Function that returns an object

// WHY?

// ------------------------------------------
// let huxn = {
//   firstName: "HuXn",
//   lastName: "WebDev",
//   fullName: function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & i love javascript`
//     );
//   },
// };

// let john = {
//   firstName: "John",
//   lastName: "doe",
//   fullName: function () {
//     console.log(
//       `Hello my name is ${this.firstName} ${this.lastName} & i love javascript`
//     );
//   },
// };

// john.fullName();

// ------------------------------------------
function createPerson(firstName, lastName, pl) {
  return {
    firstName: firstName,
    lastName: lastName,
    pl: pl,
    fullName: function () {
      console.log(
        `Hello my name is ${this.firstName} ${this.lastName} & i love ${this.pl}`
      );
    },
  };
}

const john = createPerson("John", "Doe", "Python");
const huxn = createPerson("HuXn", "WebDev", "Golang");
const jordan = createPerson("jordan", "peterson", "JavaScript");
console.log(john);
console.log(huxn);
console.log(jordan);

console.log(john.fullName());
console.log(huxn.fullName());
console.log(jordan.fullName());
// ------------------------------------------

// create a factory function that generates different types of vehicles.
// Each vehicle object should have properties like type, brand, model, and year.

function createVehicle(type, brand, model, year) {
  return { type, brand, model, year };
}

const vehicle1 = createVehicle("Car", "Toyota", "Camry", 2020);
const vehicle2 = createVehicle("Motorcycle", "Honda", "CBR500R", 2019);

// Test the vehicles
console.log(vehicle1); // { type: 'Car', brand: 'Toyota', model: 'Camry', year: 2020 }
console.log(vehicle2); // { type: 'Motorcycle', brand: 'Honda', model: 'CBR500R', year: 2019 }
