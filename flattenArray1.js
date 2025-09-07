
function flattenArr(arr,fn){
  if(!Array.isArray(arr) || typeof fn !== 'function') throw new Error('invalid array or function');

let result = [];

for(let i=0; i<arr.length; i++){
  if(Array.isArray(arr[i])){
    result.push(...fn(arr[i]))
  }else{
    result.push(arr[i])
  }
}
   return result;
}

function fn(array){
 return array
}
 const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7],500,600];
 console.log(flattenArr(a,fn));