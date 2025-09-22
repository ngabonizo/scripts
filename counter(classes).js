class counter {
  constructor(init = 0){
    this.value = init;
    this.init = init;
  }

 increment() {
  return ++this.value;
 }
 decrement() {
  return --this.value
 }
 reset() {
  return this.value = this.init;
 }
}

let c = new counter(5);
console.log(c.increment())
console.log(c.decrement());
console.log(c.reset())
  