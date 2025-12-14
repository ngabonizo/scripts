



function reverseString(str) {
 if(Object.prototype.toString.call(str).slice(8,-1) === 'Object')throw new Error('str is not a string');

 
let reverse = null
let key = null

  reverseString.cache = reverseString.cache || {};
if(typeof str === 'string'){
   reverse = str.split('').reverse()
  key = reverse.join(',')
 
}else if (typeof str === 'object'){
  reverse = str.reverse()
  key = reverse.join('')
}
     reverseString.cache[key] = reverse;

   if(reverseString.cache[key]) return reverseString.cache[key]
   
   return reverse
}


let a = [1,2,3,4,5,6];
let names = ['ngabo', 'isaac', 'manzi', 'ivan', 'rulinda', 'danie']
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f']
let string = 'I am going to school'

console.log(reverseString(a))
console.log(reverseString(names))
console.log(reverseString(alphabet))
console.log(reverseString(string))