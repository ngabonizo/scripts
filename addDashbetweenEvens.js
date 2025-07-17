function addDash(arr){
  let result = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 ===0 && arr[i+1] === 0){
      arr[i].concat('-');
  
    }
    
  }

  return arr;
}
let a = [1,2,3,4,4,5,6];
console.log(addDash(a));
