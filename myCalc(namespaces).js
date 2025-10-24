let MyCalculator =  {};
// or
// var MyCalculator = MyCalculator || {};

// let MyCalculor = MyCalculator || {} wont work because of "let"

MyCalculator.add = function (a,b){
  return a + b;
}

MyCalculator.subtract = function(a,b){
  return a-b;
}

console.log(MyCalculator.add(5,4));
console.log(MyCalculator.subtract(5,4))

5

var myCalculator = myCalculator || {};
myCalculator.add = class {
  constructor(a,b){
    this.a = a;
    this.b = b;
  }

  sum() {
    return this.a + this.b;
  }
}

myCalculator.subtract = class {
  constructor(a,b){
    this.a = a;
    this.b = b;
  }

  take_away() {
    return this.a - this.b;
  }
}

let plus = new myCalculator.add(5,5);
console.log(plus.sum())

let minus = new myCalculator.subtract(5,5);
console.log(minus.take_away())
