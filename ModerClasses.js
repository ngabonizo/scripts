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