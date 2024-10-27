// Arrays

let first_name = 'Brian';
let second_name = 'John';
let third_name = 'Mathew';
let fourth_name = 'Anjana';

final_output = [first_name, second_name, third_name, fourth_name];

console.log(final_output);

let printer = {
   names: final_output,
   print_names: (option) => {
      console.log(option);
      console.log(`Printing names ${this.names}`);
   }
};

printer.print_names();