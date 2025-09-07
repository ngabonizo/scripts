function findMaximum(){
  let max = Number.NEGATIVE_INFINITY; //most negative value;

  for(let i=0; i<arguments.length; i++){
    if(arguments[i] > max) max = arguments[i]; //used the argument object
  }
  return max;
}

console.log(findMaximum(1,2,355,10000,-3));