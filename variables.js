'use strict';
// variable types
var myNumber = 5; // number
var myString = 'Hello World!'; // string
var isItSunny = true; // boolean

myNumber = 7;

// console.log printouts
// console.log(myNumber); // 7
// console.log(myString); // Hello World!
// console.log(isItSunny); // true
// console.log(noVariable); // undefined

// bindings to variables
var mySecondNumber = 30;
myNumber = 'string';
// console.log(mySecondNumber);
// console.log(myNumber);

// 'let' and 'const' variables
let letVariable = 'Welcome!';
// letVariable = true; // THIS IS WRONG
// console.log(letVariable); // ERROR

const CONST_VAR = 'This is a string.';
// CONST_VAR = 'This is my new string.'; // THIS BROKE THE APPLICATION!

// variable names and case sensitivity
var myString = 'My string';
var MyString = 'My string #2';
var MYSTRING = 'My string #3';

// console.log(myString + MyString + MYSTRING); // string concatenation

// invalid variable names
// var 1Mystring = 'Not valid';
// var 123456 = 123456;
// var %something = 'Also not valid';
// var My Variable = false;
// var false = false;
// var typeof = 'String';

// exceptions
var $MyVariable = true;
var _MyVariable = true;
