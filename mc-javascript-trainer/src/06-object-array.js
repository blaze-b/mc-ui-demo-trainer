// Reference types are `Object`, `Array`

// Object

let person = {
    name: 'Brian',
    age: 30
};

console.log(person);

// Access the object details

console.log(person.name);

console.log(person.age);

// Assigning

person['name'] = 'Mary';

console.log(person);

// Object Function Assignment

let obj = {

  a: 5,
  b: () => {

    console.log('b');

  }

};

obj.b();

// Object entries()

obj = {

  firstName: 'First',
  lastName: 'Last',
  age: 24,
  country: 'India'

};

const entries = Object.entries(obj);

console.log(entries);

// Arrays

let selected_colors = ['Red', 'Blue', 'Black'];

console.log(selected_colors);

// Assign

selected_colors[2] = 'Green';

console.log(selected_colors);

// Accessing

console.log(selected_colors[2]);

// Length

console.log(selected_colors.length);