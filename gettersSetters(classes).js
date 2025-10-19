class ElectricCar {
  constructor(brand, level) {
    this.brand = brand;
    this._battery = level;
  }

  get batteryStatus() {
    return this._battery;
  }

  set batteryStatus(value) {
    if (value >= 0 && value <= 100) {
      this._battery = value;
    } else {
      console.log("Invalid battery level");
    }
  }
}

let c = new ElectricCar("Tesla", 80);
c.batteryStatus = 120; // Invalid battery level
console.log(c.batteryStatus); // 80
