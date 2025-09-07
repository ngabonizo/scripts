/*    function cloneArray(arr){
  if(!Array.isArray(arr)) throw new Error('not an array');

  let result = new Array();
  for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      cloneArray(arr[i])
      result.push(cloneArray(arr[i]))
    }else{
      result.push(arr[i])
    }
  }
  return result;
} 

let a = [1,2,[3,4,5,['ngabo']],7];
console.log(cloneArray(a)); */ 

  function cloneArr(a){
  if(!Array.isArray(a)) throw new Error('not an Object');

  let clone = new Array();
  for(let i=0; i<a.length; i++){
    if(Array.isArray(a[i])){
      cloneArr(a[i]);
      clone.push(a[i]) //this part pushes to the clone nested arrays
    }else{
      clone.push(a[i])
    }
  }
  return clone;
}

let ar = [1,2,[3,4,5,['ngabo']],7];
console.log(cloneArr(ar)); 
 