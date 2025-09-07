function filterProp(object){
  if(Object.prototype.toString.call(object).slice(8,-1) !== 'Object') throw new TypeError('Invalid object input');

  let entriesArray = Object.entries(object);
  let result = [];

 function help(arr){
  
     for(let i=0; i<arr.length; i++){
       if(Array.isArray(arr[i])) help(arr[i])
        else if(arr[i] > 20) result.push(arr);
     }
     return result
  }
 return help(entriesArray)

}

console.log(filterProp({
  a: 10,
  b: 'hello',
  c: 25,
  d: false,
  e: 50
}))