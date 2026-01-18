// function largestOfAll(arr){
//    if(!Array.isArray(arr)) throw new Error('arr not an array')
//
//   let resultArray = []; 
//   let largest = null;
//
//   for(let i=0; i<arr.length; i++){
//       console.log(arr[i]);
//     if(Array.isArray(arr[i])) console.log('is nested array')
//   }
// }

function largestOfAll(arr) {
if(!Array.isArray(arr)) throw new Error('arr not an array')
  let results = [];
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // recurse into sub-array
      results.push(...largestOfAll(arr[i]));
    } else if (typeof arr[i] === 'number') {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  }

  // store largest of the CURRENT array
  if (largest !== -Infinity) {
    results.unshift(largest)
  }

  return results;
}


let array = [4, 12, [85, 27, 15], [12, 9, [100, 200, [500, 120]]]]


console.log(
  largestOfAll([4, 12, [85, 27, 15], [12, 9, [100, 200, [500, 120]]]])
);






