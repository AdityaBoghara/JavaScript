// The Object.create() method creates a new object, using an existing object as the prototype of the
// newly created object.

let person = {
  greet: function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};

const adi = Object.create(person);
adi.firstName = "Adi";
adi.lastName = "Boghara";
adi.greet();

let ban = Object.create(person, {
  firstName: { value: "Bansari" },
  lastName: { value: "Boghara" },
});

console.log(ban);
ban.greet();
