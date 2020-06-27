// Local and Global scoped variables
// "use strict";

function multiply(myVariable, x) {
  return myVariable * x;
}

function divide(myVariable, y) {
  let myVar = 4;
  return myVariable / y;
}

function multiplyWithLocalVar(z) {
  let myLocalScopeVar = 4;
  return myLocalScopeVar;
}

// console.log(multiply(1, 6));
// console.log(divide(6, 2));

// demonstrating local variables declared outside of a function
let myVariable = 9;
// console.log(multiply(myVariable, 2));
console.log(divide(myVariable, 2));

// Demonstrating local variables only available within the function
// console.log(multiplyWithLocalVar());
// console.log(myLocalScopeVar);
