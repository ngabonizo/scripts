function factorial(n){
  if(isFinite(n) && n > 0 && n === Math.round(n)){
    if(!(n in factorial)){
      factorial[n] = n * factorial(n - 1);
    }
    return factorial[n];
  }else {
    return NaN;
  }
}

//Base case for factorial
factorial[1] = 1;
console.log(factorial(5)); // 120
console.log(factorial[5]); //cached value: 120
console.log(factorial(6)) // 720 (uses cached factorial(5))