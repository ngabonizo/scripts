 function sumOfParts(array){
  if(typeof array !== 'object') return [];

  let sum = array.reduce((acc, val) =>  acc + val, 0);
  let result = [sum];
  
  for(let prop of array){
    sum = sum - prop
    result.push(sum)
  }
  console.log('sum: ', result)
  console.log(sum)
 }

 let ls = [0, 1, 3, 6, 10];
 let ls2 = [5,4,3,2,1]
 console.log(sumOfParts(ls))
 console.log(sumOfParts(ls2))