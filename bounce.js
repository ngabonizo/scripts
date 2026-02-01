function bouncer(arr){
if(arr.length === 0) return [];

let result = [];
let falsyValues = [false, null, 0, '', undefined, NaN];

for(let i=0; i<arr.length; i++){
  if(falsyValues.includes(arr[i])) continue;
  else result.push(arr[i])
}
return result;
}

console.log(bouncer([7, 'ate', '', false, 9])) // should return [7, 'ate', '9']
