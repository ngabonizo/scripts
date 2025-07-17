function remDuplicates(arr){
  if(!Array.isArray(arr) || arr.length === 0) return [];

for(let i=0; i<arr.length; i++){
  for(let j=i+1; j<arr.length; j++){
    if(arr[j] === arr[i]){
      arr.splice(j,1)
    }
  }
}  
return arr
}

const a = [1,2,3,4,5,2,3,6,1,7,9,6,8];
console.log(remDuplicates(a));