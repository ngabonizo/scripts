function foreach(arr){
  if(Object.prototype.toString.call(arr).slice(8,-1) !== 'Array') throw new Error('arr is not an array');

 return arr.forEach((value) => console.log(value));
}


function sum(arr){
  let sum = 0;
  arr.forEach((value) => sum+= value);
  return sum;
}
console.log(foreach([1,2,3,4]))
console.log(sum([1,2,3,4]))