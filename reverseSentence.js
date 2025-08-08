function reverseSentence(sentence){
  if(typeof sentence !== 'string') throw new Error('sentence is not a sentence');

  reverseSentence.cache = reverseSentence.cache || {};

  let splitSentence = sentence.split(' ').join(' ');
  if(reverseSentence.cache[splitSentence]) return reverseSentence.cache[splitSentence];

  let reversed = splitSentence.split(' ').reverse().join(' ');
  reverseSentence.cache[splitSentence] = reversed;
  return reverseSentence.cache[splitSentence]
}

console.log(reverseSentence('Kunda ugukunda'))
console.log(reverseSentence.cache)