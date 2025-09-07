function shuffle(arr) {
  if(!Array.isArray(arr) || arr.length === 0) throw new Error('invalid array');

  let arrayLength = arr.length; 
  let temporaryVariable,randomIndex;

  //while there are elements in the array
  while (arrayLength > 0){

    //pick a ramdom index
    randomIndex = Math.floor(Math.random() * arrayLength);
    
    // but why decrease ctr by one ???
    arrayLength --;
    
    //swap the last element with the randomly picked element
    temporaryVariable = arr[arrayLength];
    console.log('temp:',temporaryVariable)
    
    arr[arrayLength ]= arr[randomIndex];
    console.log('',arr[arrayLength])
    arr[randomIndex] = temporaryVariable;
    
  }
  return arr
}
const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray))