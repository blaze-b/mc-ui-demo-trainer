## Development process for typescript

- File have the .ts extension
- Add it in the Driver.ts file

## Development process for typescript

- File have the `.ts` extension
- Add it in the `Driver.ts` file

```typescript

console.log("Hello World");

```

- Run the file,

```shell

cd mc-typescript-trainer

./driver.sh

```

- Manually to test the running of the driver file

```bash

tsc Driver.ts

# Provide the flag to avoid the errors
tsc --noEmitOnError Driver.ts

# Compiler flag
tsc --target ES5 --noEmitOnError Driver.ts

```

- To many compiler configs will be difficult to manage, sample file attached to prevent the
  compilation issue

```json
{
  "compilerOptions": {
    "target": "ES5",
    "noEmitOnError": true
  }
}
```

```shell

#Create a tsconfig.json file

tsc -- init

# After that to compile the  project
tsc

```

- The above command will generate the 01-basics.js file and the process is called `transpiling` to
  generate the JavaScript file

- Run the file using the following command

```bash

node Driver.js

# The compiler can find the errors at the compile time

```

## Typescript variables

| Type    | Description                                               |
|---------|-----------------------------------------------------------|
| var     | function-scoped, can be re-declared and updated           |
| let     | block-scoped, cannot be re-declared but can be updated    |
| const   | block-scoped, cannot be re-declared and cannot be updated |
| boolean | true or false                                             |
| number  | integer or floating point number                          |
| string  | sequence of characters                                    |
| any     | any type                                                  |

## Typescript brush up

- The [Basics](../mc-typescript-trainer/src/Basics.ts) consists of the basic
  typescript code for the beginners
- The basics of code organization, [modules](../mc-typescript-trainer/src/Driver.ts)
- Supports inheritance, [inheritance](../mc-typescript-trainer/src/Driver.ts)
    - The class can inherit the properties and methods from the parent class
    - The class can override the properties and methods from the parent class
    - Subclasses can have their own properties and methods and can add new properties and methods
    - Support abstract classes
    - It only supports single inheritance
    - Can implement multiple interfaces
- Abstract classes, [abstract classes](../mc-typescript-trainer/src/Driver.ts)
    - Abstract classes cannot be instantiated
    - Abstract classes can have abstract methods
    - Abstract methods must be implemented in the concrete subclass
- Interfaces, [interfaces](../mc-typescript-trainer/src/Driver.ts)
    - Define an interface with a method contract
    - Classes can implement the interface according to the contract
    - A class can implement multiple interfaces
    - It can also use interfaces to support contracts with properties