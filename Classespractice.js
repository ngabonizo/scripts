class Person {
  constructor(name){
    this.name = name;
  }

  call() {
    return this.name;
  }
}

class person2 extends Person {
  constructor(name, age){
    super(name);
    this.age = age;
  }

  log () {
    return `${this.name} is ${this.age}`
  }
}

let person = new Person ('ngabo');
console.log(person.call());

let newPerson = new person2 ('ngabo isaac', 54);
console.log(newPerson.log())


class rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  get area() {
    return this.width * this.height;
  }

  set side(n){
    this.width = this.height = n
  }
}

let sp = new rectangle( 5,5);
console.log(sp.area)
sp.side =30;
console.log(sp.area)