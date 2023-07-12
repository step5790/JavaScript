"use strict";

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

//   return juice;
// }

// const appleJuice = fruitProcessor(5, 9);
// console.log(appleJuice);

// function declaration
function calcAge1(birthYear) {
  return 2035 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression; anonymous function
const calcAge2 = function (birthYear) {
  return 2035 - birthYear;
};

// arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;

// arrow function with more parameter & code
const yearsRetirement = (birthYear) => {
  const age = 2038 - birthYear;
  const retirement = 65 - age;
  return retirement;
};

yearsRetirement(1991);
