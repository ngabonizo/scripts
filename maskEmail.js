
function maskEmail(email){
  if(typeof email !== 'string') throw new Error('email not a string')

  let newStr = ''
  let firstIndex = 0;
  let lastIndex = email.indexOf('@') - 1;


  for(let i=0; i<email.length; i++){
    if(i>firstIndex && i<lastIndex){
      newStr += '*'
    }else{
      newStr += email[i]
    }
  }
  return newStr;
}

console.log(maskEmail('ngaboizo2000@gmail.com'));
console.log(maskEmail('apple.pie@example.com'))
