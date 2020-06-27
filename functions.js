// Functions

// Function types and how to call them
// Standard function
function myFunction() {
  return "You've called myFunction()!";
};
// console.log(myFunction());

// Function using parameters
function addNumbers(num1, num2) {
  return num1 + num2;
};
console.log(addNumbers("1", 2));

// Invoking a function and storing its value to a variable
let x = addNumbers(2, 4);
// console.log(x);

function multiplyNumbers(a, b) {
  // var myString = "The summation of " + a + " and " + b + " is " + a * b;
  return `The summation of ${a} and ${b} is: ${addNumbers(a, b)}, while the product of ${a} and ${b} is ${a * b}`; // ES2016 naming convention for strings
}
// console.log(multiplyNumbers(5, 2));

// immediately invoking a function
const invokeAFunction = () => 6 / 2;
// function invokeAFunction(num1 = 6, num2 = 2) {
//   return num1 / num2;
// };

// arrow functions ES2016+
const divideNumbers = (a, b) => {
  return `Dividing ${a} by ${b} gets you ${a / b}`;
}

const divideNumbersSecond = (a, b) => a / b;
// function divideNumbersSecond (a, b) {
//   return a / b;
// };

// console.log(divideNumbers(6, 2));
// console.log(invokeAFunction()); // 3 (calling the function)
// console.log(invokeAFunction); // the function itself
console.log(divideNumbersSecond(6, 2));