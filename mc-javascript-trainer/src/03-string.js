let _firstname = 'Ryan';
let _lastname = 'D';
let _age = 10;

let result = _firstname + ' ' + _lastname + ' is ' + _age + ' years old';

console.log(result);

// Template string
result = `${_firstname} ${_lastname} is ${_age} years old`;

console.log(result);

// Multiline string

result = `
  This is a
  multiline string
`;

console.log(result);

// String includes() : check the characters in the string

console.log('apple'.includes('pp'));
// true
console.log('apple'.includes('al'));
// false
console.log('apple'.includes('tt'));
// false

// String startsWith(); check the first chars and is case sensitive

console.log('apple'.startsWith('ap'));

console.log('apple'.startsWith('AP'));

console.log('apple'.startsWith('al'));

// String repeat()

console.log('apple'.repeat(3));
