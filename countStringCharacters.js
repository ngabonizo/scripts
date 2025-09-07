function countChars(string){
  if(typeof string !== 'string') return {};

  let stringArray = string.split('').filter(value => value !== ' ');
  let countObject = {};

  for(let i=0; i<stringArray.length; i++){
    countObject[stringArray[i]] = (countObject[stringArray[i]] || 0) + 1;
  }
  console.log(countObject)
}

let str = 'school going';
console.log(countChars(str));