function sayHello() {
  sayHello.count = (sayHello.count || 0) + 1; // store count to sayHello object
  console.log(`sayHello! Called ${sayHello.count} times.`)
}

console.log(sayHello());
console.log(sayHello())