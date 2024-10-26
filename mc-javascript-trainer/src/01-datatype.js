console.log('Hello World')

// ES6 we use the variable
// Cannot use the reserved keywords
// Naming should be meaningful
// Cannot start with the number(1name)
// Cannot contain space or '-' and should be Camel Case

var test = 'Hi';
console.log(test);

let name = 'Brian';
console.log('Name: ' + name);

let firstname ='Brian', lastname = 'Parker';
console.log(firstname + ' ' + lastname);

// Reassigning is possible
let interest_rate = .6;
interest_rate = 1
console.log(interest_rate);

// Cannot reassign then 'const'
const int_rate = .6;
// int_rate = 1;
// Output
//TypeError: Assignment to constant variable.
//    at Object.<anonymous> (D:\dev\git\mc-ui-trainer\mc-javascript-trainer\src\01-intro.js:22:10)
//    at Module._compile (node:internal/modules/cjs/loader:1469:14)
//    at Module._extensions..js (node:internal/modules/cjs/loader:1548:10)
//    at Module.load (node:internal/modules/cjs/loader:1288:32)
//    at Module._load (node:internal/modules/cjs/loader:1104:12)
//    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:174:12)
//    at node:internal/main/run_main_module:28:49

console.log(int_rate);


