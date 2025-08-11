function charFrequency(str){
  if(typeof str !== 'string') throw new Error('str is not a string');

  charFrequency.cache = charFrequency.cache || {};

  const countresult = (function(string){
    let countObject = {}
    
    for(let i=0; i<string.length; i++){
    countObject[string[i]] = (countObject[string[i]] || 0) + 1;
    }
    return countObject;
  }
)(str)
  
if(charFrequency.cache[str]) return charFrequency.cache[str];
charFrequency.cache[str] = countresult;

return charFrequency.cache[str]
}

console.log(charFrequency('I love you'))
console.log(charFrequency('ngabo'))