function getCount(str) {
  let vowels = 'aeiou';
  let count = 0;
  
  for(let char of str){
    if(vowels.includes(char)) count++;
      
  }
  return count;
}
console.log(getCount('ngabo isaac is a good programmer'));