function square(number) {

  return number * number;

}

console.log(square(2));

function greet(firstname, lastname) {

  console.log(`Hello ${firstname} ${lastname}`);

}

greet('Brian', 'Blaze');

greet('Meera', 'John');

greet(); // shows with undefined


//default parameter assigned
function welcome(firstname='Hello', lastname="Tester") {

  console.log(`Hello ${firstname} ${lastname}`);

}

welcome();