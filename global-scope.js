// Local and Global scoped variables

// Global scope-
let myVariable = 2;

function multiply(myVariable, x) {
  return myVariable * x;
}

function divide(myVariable, y) {
  myVariable = 4;
  return myVariable;
}

// console.log(multiply(myVariable, 6));
// console.log(multiply(3, 6));
// console.log(divide(myVariable, 2));
// console.log(myVariable);

myVariable = 9;
// console.log(multiply(myVariable, 2));
console.log(divide(myVariable, 2)); // 2: before I changed the function :) 
console.log(myVariable); // 9
console.log(divide()); // 4
