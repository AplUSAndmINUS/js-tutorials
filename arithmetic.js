'use strict';
// Evaluating Variables
let num = 12;
let num2 = 6;
let str = '1';
let str2 = 'My string';

// arithmetic
// console.log(num + num2);
// console.log(num - num2);
// console.log(num * num2);
// console.log(num / num2);
// console.log(num % num2); // modulo operator

// strings
// console.log(str + str2); // string concatenation
// console.log(str - str2); // NaN = Not a number

// weird arithmetic
// console.log((num + num2) / num2); // 3 = ((12 + 6) / 6) = 18 / 6
// console.log(num + num2 / num2); // 13 = 12 + 6 / 6 = 12 + 1

// weird Javascript
// console.log(num + str); // 12 + '1' = '12' + '1'
// console.log(num + str2); // 12 + 'My string' = '12' + 'My string'
// console.log(num - str2); // NaN

// += operator
var str3 = "string 3";
var str4 = "string 4";
var str5 = "string 5";
// console.log(str3 + str4 + str5);

str += str3;
// console.log(str);
console.log(str += str3);
// str + str3 + str3