var Zoo = Zoo || {};

Zoo.Animal = class {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  describe() {
    return `Name: ${this.name}, Type: ${this.type}`;
  }
};

let a = new Zoo.Animal("Simba", "Lion");
console.log(a.describe()); // Name: Simba, Type: Lion
