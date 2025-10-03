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
let r = new Range(1, 3);
console.log(r.includes(2)) // true
r.foreach(console.log);  // 1 2 3
console.log(r.toString()) //(1...3) 