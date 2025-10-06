function range(from, to){
  let r = Object.create(range.methods); //inherit from methods object

  r.from = from;
  r.to = to;
  return r;
}

//shared methods (prototype-like)

range.methods = {
  includes(x) {
    return this.from <= x && x <= this.to;
  },

  foreach(f) {
    for (let x = Math.ceil(this.from); x <= this.to; x++) f(x);
  },

  toString() {
    return `(${this.from}...${this.to})`;
  }
}

//example usage

let r = range(1,3);
console.log(r.includes(2)); //true
r.foreach(console.log); //1 2 3
console.log(r.toString());  //( 1...3)


// Constructor Functon Version

function range(from, to){
  this.from = from;
  this.to = to;
}

//Add methods to the prototype
Range.prototype.includes = function (x){
  return this.from <= x && x <= this.to;
};

Range.prototype.foreach = function (f) {
  for(let x = Math.ceil(this.from); x <= this.to; x++) f(x);
};

Range.prototype.toString = function () {
  return `(${this.from}...${this.to})`;
};


// Example usage
r = new Range(1, 3);
console.log(r.includes(2)) // true
r.foreach(console.log);  // 1 2 3
console.log(r.toString()) //(1...3) 


/*
   Key difference:

With new Range(1, 3), JavaScript automatically:

1. Creates a new object.
2. Sets its prototype to Range.prototype.
3. Binds this inside the constructor to the new object.
4. Returns the new object.
 */

//Modern ES6 Class (Sugar over constructor functions)

class Range{
  constructor(from, to){
    this.from = from;
    this.to = to;
  }

  includes(x){
    return this.from <= x && x <= this.to;
  }

  foreach(f){
    for(let x = Math.ceil(this.from); x <= this.to; x++) f(x);
  }

  toString() {
    return `(${this.from}...${this.to})`;
  }
}

//Example usage

 r = new Range(1, 3);
 console.log(r.includes(2)) // true
 r.foreach(console.log)  // 1 2 3
 console.log(r.toString()) //(1...3)

 /*
 What’s important to notice:

1. In all three versions, from and to are per-object state (stored directly on each instance).

2. Methods (includes, foreach, toString) are shared through a prototype (range.methods, Range.prototype, or implicit in class).

3. The this keyword is crucial — it always refers to the current object you’re calling the method on.
 */