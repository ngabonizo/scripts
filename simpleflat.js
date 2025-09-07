let a = [1,2,[3,4,5],[6,7],6,[[[[8,[9]],10]]]];

function flatt(arr){
  let result = [];
function help(array){
 for(let i=0; i<array.length; i++){
    if(Array.isArray(array[i])) help(array[i]);
    else result.push(array[i])
  }
  return result 
}
return help(arr)
  
}
console.log(flatt(a))