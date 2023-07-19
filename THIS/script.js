"use strict";

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(th);
// };

// //SIMPLE FUNTION CALL: "This" will log undegiend since the funtion below is simple, no owner
// calcAge(1991);

// // ARROW FUNCTION: This function will display Window lexical "this" keyword of parent scope, arrow funtion doesnt have own "This"
// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(th);
// };

// calcAgeArrow(1991);

// METHOD: object that calling this method, object literal or defining an
// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // solution to get "THIS" from a regular function call is to assign a new variable to "THIS"
//     // const self = this;

//     // regular function, now replace "THIS" to a varuable holder "self"

//     // ES6 solution for regular function to have "THIS" is to add arrow function since it will get the parent scope "jonas"
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//     // regular function call, even its inside the method, in rules inside a function call the "THIS" is undefined; no "jonas."
//     // jonas.calcAge(isMillenial);
//   },

//   // arrow function with this, does not get its own "THIS", in this example the scope here is from parent scope not jonas
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// jonas.calcAge();
// jonas.calcAge();

// Method borrowing
// const matilda = {
//   year: 2018,
// };

// matilda.calcAge = joans.calcAge;
// matilda.calcAge();

// arguments keyword, this is usefull if we need function to accept more parameters
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// // arguments keyword in an arrow functions doesnt work
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8, 12);

// primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

//Copying objects using "object.assign" only works on 1st level, doestn work with object inside an object, shallow copy not deep clone,
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);
