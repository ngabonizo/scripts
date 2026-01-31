function titleCase(str){
  if(typeof str !== 'string') throw new Error('str is not a string')

  let strArr = str.split('')
  console.log(strArr)
  let result = []

  for(let i=0; i<str.length; i++){
    if(i === 0) {
      let value = str[0].toUpperCase();
      result.push(value)
    }

    else if(str[i-1] === ' '){
      value = str[i].toUpperCase();
      result.push(value)
    }else{
      value = str[i].toLowerCase()
      result.push(value)
    }
  }

return result.join('')
}

console.log(titleCase('i love to code'));
console.log(titleCase("sHoRt AnD sToUt"))
console.log(titleCase('HERE IS MY HAND'));

