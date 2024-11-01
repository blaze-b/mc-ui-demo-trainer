let things_to_do = {
    morning: 'Breakfast',
    afternoon: 'Lunch',
    evening: 'Coding',
    night: ['Sleep', 'Brush']
};


console.log(`List of items to do are ${things_to_do.afternoon}`);

console.log(things_to_do);

let { morning, afternoon } = things_to_do;

console.log(morning);

console.log(afternoon);


let uni_student = (student) => {

    let {name, college} = student;

    console.log(`${name} is studying in ${college}`)

};

uni_student({
    name: 'Brian',
    college: 'TKMCE'
})

let univ_student = (student, age) => {

    let { name, college, dob } = student;

    console.log(`${name}, ${college}, ${dob}, ${age}`);

};

univ_student({
  name : 'Brian',
  college : 'IIT',
  dob : '2000-10-10'
}, 10);


// Object nested

const Person = {
  name : "Harry Potter",
  age : 20,
  sex : 'male',
  maritalStatus : 'single',
  address: {
    country: 'USA',
    state: 'Nevada',
    city: 'Carson City',
    pinCode: '500014'
  }
};

let {address} = Person;

console.log(address);

const {address : {country, pinCode}, name} = Person;

console.log(country, pinCode, name);

console.log(city)