const a =  [1, [2, [3, 4], 5], 6];
const flattenedArray = a.flat(2);

//flatten using recusion 

function flattenArr(arr){
  if(!Array.isArray(arr)) throw new Error('Invalid array input');
  
  let result = []

  for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
    result = result.concat(flattenArr(arr[i]))
    }else{
      result.push(arr[i])
    }
  }
  return result;
}

console.log(flattenArr(a))

//flatten array using reduce
const flattenArray = arr => arr.reduce((acc, val) => acc.concat(Array.isArray(val)? flattenArray(val) : val), []);

const array = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log(flattenArray(array))