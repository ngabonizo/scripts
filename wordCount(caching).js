function wordCount(str){
  if(typeof str !== 'string') throw new Error('str is not a string');


  wordCount.cache = wordCount.cache || {};
  let a = str.split(' ');
  let key = a.join(' '); // insures consistent formatting

  if(wordCount.cache[key]) return wordCount.cache[key];
 
  wordCount.cache[key] = a.length;
  return wordCount.cache[key]
  

}
console.log(wordCount("I love JavaScript"));
console.log(wordCount("   multiple   spaces  "));// length is not 9
console.log(wordCount("Closures are power"));