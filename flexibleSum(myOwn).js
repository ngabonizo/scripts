function flexibleSum(a){
  let sum = 0;
  let element, n;

  for(let i=0; i<arguments.length; i++){
     element = arguments[i];
     if(element === null || element === undefined) continue;
     else if(Array.isArray(element)) n = flexibleSum.apply(null,element);
     else if(typeof element === 'function') n = Number(element());
     else if(element) n = Number(element);
     else throw new Error('failed to turn function argument into a number');

     sum += n;
  }
  return sum;
}

console.log(flexibleSum(1,2,'3',['5',[100,['100']]]))