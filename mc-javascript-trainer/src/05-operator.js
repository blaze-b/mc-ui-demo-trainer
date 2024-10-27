// Exponent operator

const byte = 2 ** 8;

// same as Math.pow(2, 8);

console.log(byte);

// Spread operator

// Arrays
const a = [1,2];
const b = [3,4];

let c = [...a,...b]; // Using the spread joins the object
console.log(c);

c = [a,b];
console.log(c);

// Object

let food = {
    breakfast: 'Idli',
    lunch: 'Rice and Curry'
};

let extras = {
    evening: 'Burger',
    night: 'Dos Sambhar'
};

let output = {...food, ...extras}; //spread will join two arrays as a single object
console.log(output);

output = {food,extras};
console.log(output);