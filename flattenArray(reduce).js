function flatten(arr){
  if(!Array.isArray(arr) || arr.length === 0) throw new Error('invalid array input');

   return arr.reduce((acc, val) => {
    if(Array.isArray(val)){
    return  acc.concat(flatten(val))
    }else{
    return acc.concat(val)
    }
  },[])
}
const array = [[1,2,3],[4,5,6,[7,8]]];
const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
console.log(flatten(a));