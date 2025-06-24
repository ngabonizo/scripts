function count(string) {
 if(string.length === 0) return {};
  
  let stringArray = string.split('');
  let count = 0;
  let countObject = {};
  for(let i=0; i<stringArray.length; i++){

    if(stringArray[i] === ' ') continue;
    for(let j=i+1; j<stringArray.length; j++){
      if(stringArray[j] === ' ') continue;
      if(stringArray[j] === ' ') continue;
      if(stringArray[i] === stringArray[j]){
        count ++;
      }
       countObject[stringArray[i]] = count;
    }

  }
console.log(str)
  return countObject;
};

let str = 'I am going to school';  /* ii  a   m  n  gg  oooo  t s c h l */
console.log(count(str));
