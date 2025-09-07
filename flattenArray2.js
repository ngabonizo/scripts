function flattenArray(arr){
  if(!Array.isArray(arr)) throw new Error('not an array');

  let result = []

  function flatten(arr){
    arr.forEach((value)=> {
      if(Array.isArray(value)) flatten(value);
      else result.push(value)
    })
    return result;
  }
 return flatten(arr)
}


 const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 console.log(flattenArray(a));
