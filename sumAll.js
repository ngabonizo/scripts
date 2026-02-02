function sumAll(arr){
  // this function add up every integer between the maximum and the minimum numbers in // the array
  if(arr.length !== 2 || !Array.isArray(arr)) throw new Error('invalid array');

let smallVal;
let bigVal;
let sum = 0;

  if(arr[0] > arr[1]){
    bigVal = arr[0]
    smallVal = arr[1]
  }else{
    bigVal = arr[1];
    smallVal = arr[0]
  }

  for(let i=smallVal; i<=bigVal; i++){
      sum += i;
  }

  return sum;
}

console.log(sumAll([1,4]))
