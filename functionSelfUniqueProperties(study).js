//Initialize the computer property of the function object
//Function declaration are hoisted so we really can do this assignment before
//the function declaration.
uniqueInteger.counter = 0;

//this function returns a different integer each time it is called
//It uses a property of itself to remember the next value to be returned.
function uniqueInteger() {
  return uniqueInteger.counter ++;
}



//Another example
//compute factorials and cache results as propertie of the function itself
function factorial(n){
  if(isFinite(n) && n>0 && n == Math.round(n)){ //Finite, positive ints only
  
    if(!(n in factorial)) factorial[n] = n * factorial(n-1);// if no cached results compute and cache result
    return factorial[n];
  }
  else return NaN; //if input was bad
}
factorial[1] = 1 //Initialize the cache to hold this base case.