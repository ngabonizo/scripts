//ERROR RECOVERY
//create a promise that rejects with 'Initial fail'
//catch the error, log it, then return a new promise that resolves with 'recovered!' then log the recovered value

Promise.reject("Initial fail")
.catch(err => {
  console.error(err);
  return Promise.resolve('Recovered!');
})
.then(msg => console.log(msg));

//Multiple fetch simulation
//simulate: getData() = resolve in 2 seconds with "Data"
//transformData(data) = resolve in 1 second with data.tuUpperCase()
//chain them and log "DATA"

function getData(){
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data"), 2000)
  })
}
function transformData(data){
  return new Promise(resolve => setTimeout(() => resolve(data.toUpperCase()), 1000))
}

getData().then(transformData).then(res => console.log(res));

//Promise.any
//two reject immediately with "Fail 1" and "Fail 2"
//One resolve after 1 second with "Success"
//user Promise.any() to log "Success"

let promiseA = Promise.reject("Fail 1");
let promiseB = Promise.reject("Fail 2");
let promiseC = new Promise(resolve => setTimeout(() =>resolve("Success") ), 1000)

Promise.any([promiseA, promiseB, promiseC]).then(console.log).catch(err => console.error(err.errors))

//Timeout helper
//Write a function timeout(ms) that returns a promise resolving after milliseconds
//use it to delay a log "Done!" by 3 seconds

function timeout(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}
timeout(3000).then(() => console.log("Done!"))

/*
Real-World Simulation
Here you combine async/await with promises.

Weather API simulation

Create:

getWeather() → resolves "Cloudy" after 1s

getWeatherStatus(weather) → resolves "It’s cloudy today" for "Cloudy", rejects for others
Use async/await with try...catch to log either the weather status or the error.
*/

function getWeather(){
  return new Promise(resolve => {
    setTimeout(() => resolve("Cloudy"), 1000)
  })
}

function getWeatherStatus(weather){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(weather === 'Cloudy'){
        resolve("Its cloudy day")
      }else{
        reject("NO WEATHER STATUS FOUND")
      }
    }, 1000)
  })
}
async function showWeather() {
  try{
    const weather = await getWeather();
    const status = await getWeatherStatus(weather);
    console.log(status)
  }catch(err){
    console.error("Error: ", err)
  }
}

showWeather();
/*
Parallel data fetching

Simulate fetching two independent datasets (users and products) in parallel using Promise.all().

Each should take a different time to resolve.

Log both results once both are ready.
*/
function getUsers() {
  return new Promise(resolve => setTimeout(() => resolve(["Ngabo", "Bob"]), 1500))
}

function getProducts() {
  return new Promise(resolve=> setTimeout(() => resolve(["Books", "Laptop"])), 1000)
}

Promise.all([getUsers(), getProducts()]).then(([users, products]) => {
  console.log("Users: ", users);
  console.log("Products: ", products)
})


/*
Fallback with Promise.race

Create:

fetchFromServer() → resolves after 3 seconds with "Server Data"

fetchFromCache() → resolves after 1 second with "Cache Data"
Use Promise.race() so the fastest one is logged.
*/

