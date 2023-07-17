"use strict";

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(th);
};

//SIMPLE FUNTION CALL: "This" will log undegiend since the funtion below is simple, no owner
calcAge(1991);

// ARROW FUNCTION: This function will display Window lexical "this" keyword of parent scope, arrow funtion doesnt have own "This"
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(th);
};

calcAgeArrow(1991);

// METHOD: object that calling this method
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
  },
};

jonas.calcAge();

// Method borrowing
const matilda = {
  year: 2018,
};

matilda.calcAge = joans.calcAge;
matilda.calcAge();
