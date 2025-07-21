function flexibleSum(...args){

  let total = 0;
  let n;

  for(let prop of args){
    if(prop === null || prop === undefined) continue;
    if(Array.isArray(prop)) total += flexibleSum(...prop);
    else if(typeof prop === 'function') total += Number(prop());
    else{
       n = Number(prop);
      total += n;
        if(isNaN(prop)) throw new Error('Cant convert' + prop + 'into a number');
    } 
    total += n;
    }
console.log('total: ', total)
    return total;
}

//console.log(flexibleSum(1, "2", [3, 4], () => 5));
//console.log(flexibleSum(1, null, undefined, 2));
console.log(flexibleSum([1, [2, [3]]]))