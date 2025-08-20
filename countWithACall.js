function countCallback(callback){
  let num = 1;

  function next(){
    if(num <=5){
      callback(num);
      num++;
      setTimeout(next, 1000)
    }
  }
  next();
}

countCallback(function (n) {
  console.log(n)
})