async function retryPromiseUntilSuccess(task, retries){
  for(let i=0; i<retries; i++){
    try{
      return await task();
    } catch(e){
      console.log(`Attempts ${i + 1} failed`);
    }
  }
  throw new Error('All retries failed')
};

let attempts = 0;

retryPromiseUntilSuccess(function() {
  return new Promise((resolve, reject) => {
    attempts ++;
    attempts === 3 ? resolve('Success') : reject('Fail')
  })
}, 5). then(console.log)

