function findElement(arr, fn){
  if(!Array.isArray(arr)) return undefined;
   
    for(let i=0; i<arr.length; i++){
      let result = fn(arr[i])
    if( result) return arr[i]

  }
}

function test(value){
  if(value % 2 === 0) return true;
}
const array = [1,3,5,7,8,10];
const array2 = [1,3,4,5,6]
const result = findElement(array,test);
console.log(result)
console.log(findElement(array2, test))
