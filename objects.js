// Objects, object notation, and manipulating objects

// Objects are like nouns....
const myAdorableCat = {
	name: 'Whiskers',
};

// .... which have adjectives to describe them called properties....
const myAdorableCat2 = {
	...myAdorableCat,
	legs: 4,
	color: 'black',
	age: 3,
};

// .... and can perform actions (verbs) they can carry out called methods (or functions)
const myAdorableCat3 = {
	...myAdorableCat2, // ES2016
	run: () => console.log(`I'm running!`),
	meow: () => console.log('Meow!'),
};

// they are referenced similar to arrays and strings:
// console.log(myAdorableCat.name);
// console.log(myAdorableCat2.legs);
// console.log(myAdorableCat3.name);
// myAdorableCat3.run();

// and their properties can be changed in JavaScript (mutable)
myAdorableCat.name = 'Daisy';
// console.log(myAdorableCat.name);
// console.log(myAdorableCat3.name);

// objects can be created (instantiated) and given specific properties based on the object schema

const robot = Object.create(myAdorableCat3); // instantiating "robot" of the "myAdorableCat3" prototype
// robot.name = 'Rosy';
// robot.legs = 2;
// robot.run();
// console.log(robot.name);
// console.log(myAdorableCat3);

// objects can also be embedded within each other and extend to other sub objects

// const Animal = {
// 	name: '',
// 	age: 12,
// 	type: '',
// 	greet: () => {
// 		console.log('Hi human!');
// 	},
// };

// three different ways to set up an object constructor
class Animal {
	constructor(name, type, age) {
		this.name = name;
		this.type = type;
		this.age = age;
	}
}

const myCat = new Animal('Whiskers', 'Cat', 5);
myCat.greet = () => console.log('Hi human!');
myCat.hairType = 'long';
// console.log(myCat.name);
// console.log(myCat.age);
// myCat.greet();
// console.log(myCat.hairType);
// console.log(myCat);

// object embedded within another object:
const Turtle = {
	name: 'Waxed',
	type: 'turtle',
	legs: 4,
	weight: 40,
	actions: {
		run: () => console.log('Run slowly'),
		trot: () => console.log('Trot slowly'),
		walk: () => console.log('Walk to a crawl'),
	},
};

// console.log(Turtle.name);
// console.log(Turtle.type);
// Turtle.actions.run();
