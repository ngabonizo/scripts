function sumArray(arr){
  const key = arr.join(',');
  console.log(key.length)
  sumArray.cache = sumArray.cache || {};

  if(sumArray.cache[key]) return sumArray.cache[key];
  const result = arr.reduce((sum,num) => sum + num, 0);
  sumArray.cache[key] = result;
  return result;
}

console.log(sumArray([1,2,3])); // 6
console.log(sumArray([4,5,6])); // 15
console.log(sumArray([1,2,3])); // 6 (from cache)
console.log(sumArray.cache); // { '1,2,3': 6, '4,5,6': 15 }