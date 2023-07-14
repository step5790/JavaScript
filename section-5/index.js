"use strict";

//Problem:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature aplitude. Keep in mind that sometimes there might be a sensor error."

// 1. Problem tearup
// -What is temp amplitude? Diff betweem highest and lowest temp
// -How to compute max and min temp
// -What is a sensor error? What to do?

// 2. Break to sub-prob
// -How to ignore errors?
// -Find max value in temp array
// -Find min valie in temp array
// Subtract min from max (amplotide) and return it

// const temp = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmpl = function (temps) {
//   let max = temp[0];
//   let low = temp[0];

//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] !== "number") continue;
//     if (temp[i] > max) max = temp[i];
//     if (temp[i] < low) low = temp[i];
//   }

//   //   adding - can make the negative numver to positive, apply math principles
//   return max - low;
// };

// console.log(calcTempAmpl(temp));

// const measureKelvin = function () {
//   const measurment = {
//     type: "temp",
//     unit: "celsius",
//     value: prompt("Degrees Celsius:"),
//   };

//   //   nice to see the big picture of objects
//   console.table(measurment);

//   const kelvin = measurment.value + 273;

//   return kelvin;
// };

// console.log("te");
// console.log(measureKelvin());

// problem 1: get the values of array
// problem 2: each values assign a text fx "21c in 2 days"
// problem 3: the x days are index numbers, index + 1
// problem 4: convert arrays to string
// problem 5: separation between strings "..."

// const temp = [17, 21, 23];
// const stringTemp = [];

// function printForecast(arr) {
//   for (let i = 0; i < temp.length; i++) {
//     const tempString = `${temp[i]}c in ${i + 1} days ...`;
//     stringTemp.push(tempString);
//   }
//   return (arr = stringTemp.join(" "));
// }

// console.log(printForecast(temp));
