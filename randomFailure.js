let promise = new Promise((resolve, reject) => {

  let outcome = Math.random();
  console.log(outcome) //checking if outcome produces random values
  if(outcome > 0.5){
    resolve("success")
  }else{
    reject('failure')
  }
});

promise.then((success) => {
  console.log(success)
}).catch((failure) => {
  console.log(failure)
})