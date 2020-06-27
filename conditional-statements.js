// Conditional Statements
let num1 = 5;
let num2 = 6;
let num3 = 5;
let myString = '5';

// console.log(num1 == num3); // true
// console.log(num1 == myString); // are the values the same?
// console.log(num1 === myString); // are the values the same AND the same type?

// if (num1 === num3) {
// 	// true?
// 	console.log('The variables num1 and num3 are equal.');
// }

// if (num1 === myString) {
//   console.log('The variables num1 and myString are equal.');
// } else {
//   console.log('These variables are not the same type.');
// }

// if using === (EQUAL + same type)
// if (num1 === num3) {
//   console.log('The variables num1 and num3 are equal.');
// }

// if (num1 !== myString) {
//   console.log('The variables num1 and myString are equal but NOT the same type.');
// } else {
//   console.log(
//     'The variables num1 and myString are equal but NOT the same type.'
//   );
// }

// comparing two statements using && (AND)
// if (num1 === num2 && num1 === num3) {
//   console.log('These two statements are true.');
// } else {
//   console.log('EITHER one or BOTH statements are false.');
// }

// comparing two statements using || (OR)
// if (num1 === num3 || num2 === num3) {
//   console.log('Either one of these two statements are true.');
// } else {
//   console.log('NEITHER one of these two statements are true.');
// }

// truthy and falsy statements
// console.log(!num3); // false -- falsy

// if (!num3) { // does num3 NOT exist?
//   console.log('This is a truthy statement. The variable num3 exists.');
// } else {
//   console.log('This is a falsy statement. The variable num3 does exist, but the statement came back falsy.');
// }

// if (!num4) {
//   console.log('The variable num4 does not exist.');
// } else {
//   console.log('The variable num4 does exist.');
// }

// simplified if/else
// if (!myString) console.log('The variable myString does exist.');
// else console.log('The variable myString does exist.');

// tertary operator
// (num3)
// 	? console.log('This is a truthy statement.')
//   : console.log('This is a falsy statement.');

// switch/case statements
// switch (myString) {
//   case 'myString':
//     return 'myString';
//     break;
//   case '5':
//     return '5';
//     break;
//   default:
//     break;
// };

// weird set ups
let notANumber = NaN; 
let itsUndefined = undefined;
let itsNull = null;
let emptyString = ''; // falsy statement 
let itsFalse = false;

// truthy and falsy
// console.log(!num1); // false
// console.log(!!num1); // true

// console.log(emptyString == itsFalse); 
// console.log(emptyString == itsUndefined); 
// console.log(emptyString == itsNull);
// console.log(itsNull == itsUndefined);
// console.log(itsFalse === itsFalse);
// console.log(NaN == NaN);