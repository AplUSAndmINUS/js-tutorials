// Strings and Arrays
let myStrArray = ['orange', 'banana', 'apple', 'cherry'];
let myNumArray = [9, 6, 3, 2];
let myArray = [true, undefined, 9, 'orange', 'banana', 'simple'];

// referencing data in an array
// console.log(myStrArray[3]);
// console.log(myStrArray[0]);
// console.log(myStrArray[2]);
// console.log(myNumArray[3], myStrArray[0]);

// looping through an array of values example
// for (let i = 0; i < myNumArray.length; i++) {
// 	console.log(myNumArray[i]);
// }
// console.log(myNumArray.length);

// referencing data in an array
// console.log(myStrArray.join());
// console.log(myStrArray.join(' '));

// these change the myStrArray array!
myStrArray.push('grape');
// console.log(myStrArray);
myStrArray.shift();  
// console.log(myStrArray); // ['banana', 'apple', 'cherry', 'grape']
myStrArray.pop();
// console.log(myStrArray); // ['banana', 'apple', 'cherry']
myStrArray.reverse();
// console.log(myStrArray); // ['cherry', 'apple', 'banana']
myStrArray.unshift('strawberry', 'pear', 'plum', 'kumquat');
// console.log(myStrArray);

// these only change the VALUES within the array, not the actual array itself
// source: https://stackoverflow.com/questions/35922429/why-a-js-map-on-an-array-modify-the-original-array
let myNewArray = myNumArray;
// console.log(myNewArray); // [9, 6, 3, 2]
// console.log(myNewArray.filter((i) => i >= 4));
// console.log(myNewArray); // using these options
// myNewArray.map()
// myNewArray.filter();
// myNewArray.tap();

// referencing data in a string
let myString = 'This is a string.';
// console.log(myString.charAt(2));
// console.log(myString.slice(0, 7));
// console.log(myString.substr(3, 9));
// console.log(myString.substr(0, 7));

// string split() function;
let myString2 = 'This is another string.';
// console.log(myString2.split());
// console.log(myString2.split(' ', 5));
