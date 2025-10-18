class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
}

class ElectricVehicle extends Vehicle {
  start() {
    console.log(`${this.brand} ${this.model} starts silently...`);
  }
}

let car = new ElectricVehicle("Tesla", "Model 3");
car.start(); // Tesla Model 3 starts silently...

//Extending behevior
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
}

class ElectricCar extends Car {
  constructor(brand, model, batteryLevel = 100) {
    super(brand, model);
    this.batteryLevel = batteryLevel;
  }

  start() {
    super.start();
    console.log(`Battery level: ${this.batteryLevel}%`);
  }
}

let e = new ElectricCar("Tesla", "Model S");
e.start();
// Tesla Model S is starting...
// Battery level: 100%
