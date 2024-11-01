import {Customer} from "./model/Customer";
import {InShape} from "./model/inheritance/Shape";
import {InCircle} from "./model/inheritance/Circle";
import {InRectangle} from "./model/inheritance/Rectangle";
import {AbsShape} from "./model/abstract/Shape";
import {AbsCircle} from "./model/abstract/Circle";
import {AbsRectangle} from "./model/abstract/Rectangle";
import {CricketCoach} from "./interface/CricketCoach";
import {Coach} from "./interface/Coach";
import {GolfCoach} from "./interface/GolfCoach";

let customer = new Customer("John", "Doe");

// Inheritance

console.log(customer.getFullName()); // John Doe

let myShape: InShape = new InShape(10, 15);

console.log(myShape.getInfo()); // x=10, y=15

let circle: InShape = new InCircle(10, 15, 20);

console.log(circle.getInfo()); // x=10, y=15, radius=20

let myRectangle: InShape = new InRectangle(0, 0, 3, 7);

console.log(myRectangle.getInfo()); // x=0, y=0, width=3, height=7

// Array
let shapes: InShape[] = [];

shapes.push(myShape);

shapes.push(circle);

shapes.push(myRectangle);

for (let shape of shapes) {
  console.log(shape.getInfo());
}

// Abstraction
let abs_circle: AbsShape = new AbsCircle(10, 15, 20);

let abs_rectangle: AbsShape = new AbsRectangle(0, 0, 3, 7);

let abs_shapes: AbsShape[] = [];

abs_shapes.push(abs_circle);

abs_shapes.push(abs_rectangle);

for (let abs_shape of abs_shapes) {
  console.log("-----------------------------------");
  console.log(abs_shape.getInfo());
  console.log(`Area = ${abs_shape.calculateArea()}`);
  console.log("-----------------------------------");
}

// Interface testing

let myCricketCoach: Coach = new CricketCoach();
let myGolfCoach: Coach = new GolfCoach();

let coaches: Coach[] = [];
coaches.push(myCricketCoach);
coaches.push(myGolfCoach);

for (let coach of coaches) {
  console.log(coach.getDailyWorkout());
}