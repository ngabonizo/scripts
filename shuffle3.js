function shuffle(arr){
  if(arr.length === 0) return [];

  let randomIndex,temp;

  for(let i=arr.length - 1; i>=0; i--){
  randomIndex = Math.floor(Math.random() * (i+1));
 
  temp = arr[i];
  arr[i] = arr[randomIndex];
  arr[randomIndex] = temp
  }
  return arr
}

let a =[1,2,3,4];
console.log(shuffle([...a]));