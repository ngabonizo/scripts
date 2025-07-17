function sumOfArray(arr, index = 0){
  if(!Array.isArray(arr)) throw new Error('invalid input in sumOfArray');
  if(index === arr.length) return 0;// invstigate how different resturn values affct the code ie string or return only
 
 let curr = sumOfArray(arr,index + 1);
 console.log(curr);
  return arr[index] + sumOfArray(arr, index + 1);
  
}

const a = [12,3,4,5];
console.log(sumOfArray(a))