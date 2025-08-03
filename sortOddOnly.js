function sortArray(array) {
  if(Object.prototype.toString.call(array).slice(8,-1) !== 'Array')
    throw new Error('argument not an array');
  
 return array.sort((a,b) => {
    if(a % 2 !==0 && b % 2 !== 0) return a-b;
  })
}


let b = [7, 1] ; // [1, 7]
let c = [5, 8, 6, 3, 4]; // [3, 8, 6, 5, 4]
let a = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]; //  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
console.log(sortArray(a));
console.log(sortArray(b));
console.log(sortArray(c));