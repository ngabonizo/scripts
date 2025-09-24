function fetchData(){

  let result = Math.random();
  let outcome = false;
    
  if(result >= 0.3){
    outcome = true
  }else {
    outcome = false;
  }

  return new Promise ((resolve, reject) => {
    console.log('fetching data');
    setTimeout(() => {
      if(outcome === false){
        reject('Error loading data')
      }else {
        resolve('Data loaded');
      }
    }, 1000);
  })
}

fetchData().then((result) => {
  console.log(result)
}).catch((result) => {
  console.log(result)
})



