
function wordLength(str){
  if(typeof str !== 'string') throw new Error('not a string');
   
 wordLength.cache = wordLength.cache || {};

 if(wordLength.cache[str]) return wordLength.cache[str];

 let length = str.length;
 wordLength.cache[str] = length;
 return length
}

console.log(wordLength('love is beautiful'));
console.log(wordLength('love'))





