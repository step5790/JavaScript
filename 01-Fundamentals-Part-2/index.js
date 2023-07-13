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

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(scoreDolphins, scoreKoalas) {
//   if (scoreDolphins > scoreKoalas * 2) {
//     console.log(`Dophins win (${scoreDolphins} vs. ${scoreKoalas}`);
//   } else if (scoreKoalas > scoreDolphins * 2) {
//     console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins}`);
//   } else {
//     console.log(`No team wins...`);
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// const teamArray = ["Jay", "Michael", "Lex"];
// teamArray.push("George");

// teamArray.unshift("Go");

// teamArray.pop();
// teamArray.shift();

// teamArray.indexOf("Jay");

// teamArray.includes("Jay");

// console.log(teamArray.includes("Jay"));

const bills = [125, 555, 44];

function calcTip(bill) {
  // if (bill >= 50 && bill <= 300) {
  //   return bill * 0.15;
  // } else {
  //   return bill * 0.2;
  // }

  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
];

console.log(tips);
console.log(total);

const team = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  friends: ["Michael", "Steven"],
};
// console.log(team.firstName);
// console.log(team["lastName"]);

const nameKey = "Name";

console.log(team[`last${nameKey}`]);

team["twitter"] = "@testing";
team.twitter = "@testing";
