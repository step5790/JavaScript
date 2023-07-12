"use strict";

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

//   return juice;
// }

// const appleJuice = fruitProcessor(5, 9);
// console.log(appleJuice);

// function declaration
// function calcAge1(birthYear) {
//   return 2035 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // function expression; anonymous function
// const calcAge2 = function (birthYear) {
//   return 2035 - birthYear;
// };

// // arrow function
// const calcAge3 = (birthYear) => 2037 - birthYear;

// // arrow function with more parameter & code
// const yearsRetirement = (birthYear) => {
//   const age = 2038 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// yearsRetirement(1991);

//Funtion calling other functions

// function cutFruit(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruit(apples);
//   const orangePieces = cutFruit(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

/* Write your code below. Good luck! 🙂 */

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(scoreDolphins, scoreKoalas) {
  console.log(scoreDolphins > scoreKoalas * 2);
  if (scoreDolphins > scoreKoalas * 2) {
    console.log(`Dophins win (${scoreDolphins} vs. ${scoreKoalas}`);
  } else if (scoreKoalas > scoreDolphins * 2) {
    console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins}`);
  } else {
    console.log(`No team wins...`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);
