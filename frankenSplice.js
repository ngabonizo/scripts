function frankenSplice(arr1, arr2, index) {
  let resultArray = [];

  for (let i = 0; i < index; i++) {
    resultArray.push(arr2[i]);
  }

  for (let j = 0; j < arr1.length; j++) {
    resultArray.push(arr1[j]);
  }

  for (let k = index; k < arr2.length; k++) {
    resultArray.push(arr2[k]);
  }

  return resultArray;
}

// or Even better
function frankenSplice2(arr1, arr2, index) {
  let result = arr2.slice(0, index);   // copy before index
  result.push(...arr1);                // insert arr1
  result.push(...arr2.slice(index));   // copy after index
  return result;
}
 
let a = [1, 2, 3, 4];
let b = [12, 5, 6]
console.log('reslt: ',frankenSplice(a,b,1))

// investigate how slice does not mutate the arrays. 
