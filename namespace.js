

var MyNamespace = MyNamespace || {};

MyNamespace.MyClass = class {
  constructor (message) {
    this.message = message;
  }

  sayHello() {
    return this.message;
  }
};

let obj = new MyNamespace.MyClass("Hello from namespace");
console.log(obj.sayHello())

