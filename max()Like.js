function max(){
  let maximum = Number.NEGATIVE_INFINITY;
  for(let i=0; i<arguments.length; i++) 
    if(arguments[i] > maximum) maximum = arguments[i];
  
  return maximum;
}
console.log(max(1,200,100,1000,1,2,3))

