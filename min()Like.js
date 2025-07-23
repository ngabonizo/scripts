
function min(){
  let minimum = Number.POSITIVE_INFINITY;
 
  for(let i=0; i<arguments.length; i++)
    if(arguments[i] < minimum) minimum = arguments[i];
  return minimum;
}
console.log(min(1,2,3,0,4,5));