function first(arr, n) {
 if(n == 0) return [];
  
  let result = [];
  for(let i=0; i<arr.length; i++){
     i<n ? result.push(arr[i]) : null;
  }
   return result;
}


let a = ['a','b','c','d','e'];
console.log(first(a,2));