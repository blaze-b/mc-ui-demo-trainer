let greeting = (name) => {

   if (!name) {
      throw new Error('Please provide the name');
   }

   let lastname = 'Parker';

   name = `${name} ${lastname}`;

   return name;
};

greeting('Brian');

let greet_name = `Hi ${greeting('Brian')}`;

console.log(greet_name);

let create_name = (title, body) => {

    if (!title)
       throw new Error('Please provide the title');

    if (!body)
       throw new Error('Please provide the body');

    return { "title": title, "body": body };

}

console.log(create_name('Good morning', 'Have a nice day'));

console.log(create_name());


