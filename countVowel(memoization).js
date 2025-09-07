function countVowels(str){
  if(typeof str !== 'string') throw new Error('not a string');

  countVowels.cache = countVowels.cache || {};

  let vowels = 'aeiouAEIOU';
  let presentVowels = [];

 for(let prop of str){
  if(vowels.includes(prop)) presentVowels.push(prop)
 }
 let key = presentVowels.join(',');

 if(countVowels.cache[key]) return countVowels.cache[key];
 
 let vowelLength = presentVowels.length;
 countVowels.cache[key] = vowelLength;
 return vowelLength;
}

console.log(countVowels('i love you')) //5
console.log(countVowels('Maradona')); //4
console.log(countVowels('I am going to school'))  //6
console.log(countVowels('aaaaaoooo'))


//corrected version: the whole string is used a key. vowel order and repetition is conserved
function countVowels(str) {
  if (typeof str !== 'string') throw new Error('not a string');

  countVowels.cache = countVowels.cache || {};

  let key = str; // use the input string as the cache key

  if (countVowels.cache[key]) return countVowels.cache[key];

  let vowels = 'aeiouAEIOU';
  let vowelCount = 0;

  for (let char of str) {
    if (vowels.includes(char)) vowelCount++;
  }

  countVowels.cache[key] = vowelCount;
  return vowelCount;
}

console.log(countVowels('i love you')); // 5
console.log(countVowels('Maradona'));   // 4
console.log(countVowels('I am going to school')); // 6

console.log(countVowels.cache); 
// Expected: { 'i love you': 5, 'Maradona': 4, 'I am going to school': 6 }
