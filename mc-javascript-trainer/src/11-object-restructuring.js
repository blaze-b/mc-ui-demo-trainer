let name = 'Brian';
let college = 'IIT';
let dob = '2000-10-11';
let output = () => {
    const result = `Mr ${name} is from the college ${college} and the date of birth is ${dob}`;
    console.log(result);
};

let final_output = {name, college, dob, output};

console.log(final_output);
final_output.output();