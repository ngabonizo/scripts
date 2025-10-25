class ElectricCar {
  #batteryLevel = 0;

  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  setBattery(value) {
    if (value >= 0 && value <= 100) {
      this.#batteryLevel = value;
    }
  }

  getBattery() {
    return this.#batteryLevel;
  }
}

let e = new ElectricCar("Nissan", "Leaf");
e.setBattery(85);
console.log(e.getBattery()); // 85
