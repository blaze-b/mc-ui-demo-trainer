// Class representation using functions

function Holidays(destination, days) {
    this.destination = destination;
    this.days = days;
}

// Method definition
Holidays.prototype.info = function() {

    console.log(`${this.destination} | ${this.days} days`);

}

// Invoke the class
let nepal = new Holidays('Nepal', 365);

nepal.info();

// Using Constructor

class HolidayDetails {

  constructor(destination, days) {
      this.destination = destination;
      this.days = days;
  }

  info = () => console.log(`${this.destination} | ${this.days} days`);

}

let trip = new HolidayDetails('Nepal', 364);
trip.info();

// Inheritance

class Expedition extends HolidayDetails {

   constructor(destination, days, gear) {

      super(destination, days);
      this.gear = gear;

   }

   // Method overriding
   info() {

      super.info();

   }

   gear_info = () => { console.log(`Bring your ${this.gear.join(' and your ')}`); }

}

trip = new Expedition('Nepal', 363, ['sunglasses', 'goggles', 'extra clothes']);

trip.info();
trip.gear_info();
