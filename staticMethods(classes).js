class ElectricCar {
  constructor(brand, batteryLevel) {
    this.brand = brand;
    this.batteryLevel = batteryLevel;
  }

  static compare(car1, car2) {
    return car1.batteryLevel > car2.batteryLevel ? car1 : car2;
  }
}

let c1 = new ElectricCar("Tesla", 90);
let c2 = new ElectricCar("Nissan", 75);
let better = ElectricCar.compare(c1, c2);
console.log(`${better.brand} has more battery`); // Tesla has more battery
