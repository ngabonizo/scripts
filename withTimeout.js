function withTimeout(promise, ms){
  let timedOutPromise =  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Timeout exceeded')
    }, ms)
  })

  return Promise.race([timedOutPromise, promise])
}

const prom = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('Done')
  }, 2000)
})

withTimeout(prom, 3000).then((results) => {
  console.log(results)
}).catch(function(error){
console.error(error)
})