// function delay(ms){
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function greet() {
//   await delay(2000);
//   console.log("Hello after 2 seconds")
// }
// greet()

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('Hello after 2 seconds'))
    }, 2000)
  })
}

async function greet() {
  await delay(2000);
}
//greet()

async function logAsync() {
  return 'Async Value'
}

// logAsync().then( value => console.log(value))




// function getA(){
//   return new Promise(resolve => setTimeout(resolve("A"), 1000))
// }
// function getB() {
//   return new Promise(resolve => setTimeout(resolve("B"), 2000))
// }
// function getC() {
//   return new Promise(resolve => setTimeout(resolve("C"), 3000))
// }

// async function fetchAll() {
//   let a = await getA();
//   let b = await getB();
//   let c = await getC();
//   Promise.all([a,b,c]).then(console.log)
// }
// fetchAll();


// let res = function (){ return new Promise(setTimeout(resolve('resolved1'), 1000));}
// let rej = function() {return new Promise(setTimeout(reject('rejected'), 2000));}
// let res2 = function () {return new Promise(setTimeout(resolve('resolved2'),3000));}

// async function success() {
  
// }
// success()

//inprogress

// function unstableAPI() {
//   return new Promise((resolve, reject) => {
//     if(Math.random() > 0.5){
//       resolve ('DATA')
//     }else{
//       reject('FAIL')
//     }
//   }, 1000);
// }

// async function retryAPI() {
// try{
//   const data = await unstableAPI();
//   console.log("Got data: ", data)
// } catch(err){
//   console.log(err);
//   console.log("Retrying...");
//    return retryAPI(); //recursily call itself until success
// }
// }

// retryAPI()

// const p1 = function () {
//   return new Promise((resolve, reject) => setTimeout(reject('rejected'), 1000))
// }

// const p2 = function () {
//   return new Promise((resolve, reject) => setTimeout(reject('rejected'), 2000))
// }

// const p3 = function () {
//   return new Promise((resolve, reject) => setTimeout(resolve('resolved'), 3000))
// }

// async function any() {
//   try{
// var result = await Promise.all([p1(), p2(), p3()])
//  console.log(result)
//   } catch (err){
//     console.log("Error", err)
//  // return any(); this will lead to stack overflow
//   }
 
// }
// any();