
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} year old`)
};

const john = new Person ('John Doe', 25);
john.greet(); 


function Student(name, age, studentId) {
  Person.call(this, name, age);
  this.studentId  = studentId;
}

//Inherit methods from Person's prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; //correct the constructor reference

Student.prototype.study = function () {
  console.log(`${this.name} width id : ${this.studentId} is studying programming`);
}

const jane = new Student('Jane Smith', 20 , '12994');
jane.greet(); //Inherited from Person (superclass)
jane.study();






// in progress