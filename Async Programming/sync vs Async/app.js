// sync -> sequential and blocking manner. Everything is executed one after the another
// async -> operations to be executed independently from the main flow

// ********** Synchronous Code
// function myFunc() {
//   console.log("Inside function");
// }

// console.log("Start");
// myFunc();
// console.log("End");

// ********** Asynchronous Code
console.log("Start");

setTimeout(() => {
  console.log("Inside SetTimeOut");
}, 2000);

console.log("End");
