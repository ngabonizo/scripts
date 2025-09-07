function isPrime(number){
  if(typeof number !== 'number') throw new Error('not a number');

  isPrime.cache = isPrime.cache || {};
  let key = number;

  if(isPrime.cache[key]) return isPrime.cache[key];

   let itsPrime = false;

  itsPrime = (function checkIfPrime(n){
    for(let i=2; i<=Math.sqrt(n); i++){
      if(n % i === 0) return false;
    }
    return true;
  })(number)

  if(number < 2) {
    isPrime.cache[key] = false;
    return false
  }

 // if(itsPrime === true) isPrime.cache[key] = itsPrime; this only caches primes only, but others should be cached too.
 
 isPrime.cache[key] = itsPrime

 return itsPrime;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(6))