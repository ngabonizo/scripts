Array.prototype.first = function() {
  return this[0];
}
Array.prototype.last = function() {
  return this[this.length - 1];  // this part was confusing
}

let a = [2,4,6,3,5];
console.log(a.first());
console.log(a.last())

// please remember to make the last and first methods nonnumerable using  defineProperty() 

// if there is only one property
// Object.defineProperty(Object.prototype, 'first', {
//   enumerable: false
// })

Object.defineProperties(Object.prototype,{
  first: {
    enumerable: false
  },
  last: {
    enumerable: false
  }
})



