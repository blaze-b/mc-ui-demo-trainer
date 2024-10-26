let _firstname = 'Ryan';
let _lastname = 'D';
let _age = 10;

// Old way
let result = _firstname + ' ' + _lastname + ' is ' + _age + ' years old';

console.log(result);

// Latest way
result = `${_firstname} ${_lastname} is ${_age} years old`;

console.log(result);