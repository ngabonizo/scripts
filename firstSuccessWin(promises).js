const p1 = function () {
  return new Promise((resolve, reject) => setTimeout(reject('rejected'), 1000))
}

const p2 = function () {
  return new Promise((resolve, reject) => setTimeout(reject('rejected'), 2000))
}

const p3 = function () {
  return new Promise((resolve, reject) => setTimeout(resolve('resolved'), 3000))
}

async function any() {
  try{
var result = await Promise.all([p1(), p2(), p3()])
 console.log(result)
  } catch (err){
    console.log("Error", err)
 // return any()  // stack overflow
  }
 
}
any();