function uniteUnique(arr1, arr2){

  let argumentsArray = [...arguments].flat();
  let result = []

  for(let i=0; i<argumentsArray.length; i++){
    if(!result.includes(argumentsArray[i])){
      result.push(argumentsArray[i])
    }
  }
  return result
}

console.log(uniteUnique([1,2,3], ['ngabo',3,3,5,'programmer', 'medal']));
