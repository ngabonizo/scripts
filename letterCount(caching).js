function wordCount(str) {
  if(typeof str !== 'string') throw new Error('str is not a string');

  let count = 0;

  wordCount.cache = wordCount.cache || {};

  let key = str;
  if(wordCount.cache[key]) return wordCount.cache[key];
  else{
    for(let i=0; i<str.length; i++){
      if(str[i] === ' ') continue;
      count++;
    }
  }

  wordCount.cache[key] = count;
  return wordCount.cache[key]; // returning count would also be correct;
}

console.log(wordCount("I love JavaScript"));     // 3
console.log(wordCount("Closures are power"));