function unstableAPI() {
  return new Promise((resolve, reject) => {
    if(Math.random() > 0.5){
      resolve ('DATA')
    }else{
      reject('FAIL')
    }
  }, 1000);
}

async function retryAPI() {
try{
  const data = await unstableAPI();
  console.log("Got data: ", data)
} catch(err){
  console.log(err);
  console.log("Retrying...");
   return retryAPI(); //recursily call itself until success
}
}

retryAPI()