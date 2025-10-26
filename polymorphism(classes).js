class Bird {
  speak() {
    console.log("The bird chirps");
  }
}

class Parrot extends Bird {
  speak() {
    console.log("The parrot mimics human speech");
  }
}

let b = new Bird();
let p = new Parrot();
b.speak(); // The bird chirps
p.speak(); // The parrot mimics human speech
