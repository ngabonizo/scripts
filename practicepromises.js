function resolvePromise(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, Promise!")
    },2000);
  })
};

resolvePromise().then(console.log);
 //or
resolvePromise().then(result => console.log(result))

//or 

const p = new Promise(resolve => {
  setTimeout(() => resolve("Hello, Promise"), 2000)
});

p.then(result => console.log(result))


//create and reject a promise

const r = new Promise((_, reject) => {
  setTimeout(() => reject("Something went wrong"), 3000)
})
r.catch(err => console.log(err));
// this is also working
new Promise((resolve,reject) => {
  setTimeout(() => reject('something went wrong'), 3000)
}).catch(err => console.log(err, 'Error message'))

//Using .then() and .catch()

const math = new Promise((resolve, reject) => {
  resolve(5)
});

math.then( (x) => {
 let result = x * 2 -1;
 console.log(result)
})
// or simply
Promise.resolve(5)
.then(num => num * 2)
.then(num => num-1)
.then(result => console.log(result))

// exercise 4: convert to Async/Await

async function resolve() {
  let num = 5;
  num = num * 2;
  num = num-1;
  console.log(num)
}

resolve();

//exercise 5
function promiseAll(value, ms) {
 return new Promise(resolve => setTimeout(() => resolve(value), ms))
}

let PromiseA = promiseAll('A', 1000);
let PromiseB = promiseAll('B', 2000);
let PromiseC = promiseAll('C', 3000)
let result = Promise.all([PromiseA, PromiseB, PromiseC]).then(result => console.log(result))
console.log(result, ' results')

const p1 = new Promise(function(r){
  setTimeout(function(){
    r('Ngabo')
  }, 1000)
});

const p2 = new Promise(function(r){
  setTimeout(function(){
    r('Ivan')
  }, 2000)
});

const p3 = new Promise(function(r) {
  setTimeout(function() {
   r('Junior')
  })
});

let res = Promise.all([p1, p2, p3]).then(function(results){
  console.log(results)
})

//Promise.race

let prom1 = new Promise(function(resolve){
  setTimeout(function(){
   resolve("First")
  }, 2000)
})

let prom2 = new Promise(function(resolve){
  setTimeout(()=> {
    resolve("Second")
  }, 3000)
})

let results = Promise.race([prom1, prom2]).then(function(res) {
  console.log(res)
});

console.log(results)

