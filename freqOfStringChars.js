function frequency(str){
  if(typeof str !== 'string') throw new Error('str is not a string');

  let count = 0;
  let countObject = {}

  for(let i=0; i<str.length; i++){
    for(let j=i; j<str.length; j++){
      if(str[i] === str[j]){
        count++;
        countObject[str[i]] = count;
      }
    }
  }
console.log(countObject)
}

console.log(frequency('I love you'))

//do this function with the nested loops method and see if it works