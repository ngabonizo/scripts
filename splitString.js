function solution(str){
   let resultStr= '';
  let resultArr = [];

  let splitString = str.split('');

   
  for(let i=0; i<splitString.length; i++){
    resultStr = resultStr + splitString[i];

    if(resultStr.length === 2){
       resultArr.push(resultStr);
       resultStr = new String;
    }else if(str.length % 2 !== 0 && i === str.length -1){
      resultArr.push(`${str[i]}_`)
    }
  }    
  
  return resultArr
}

let str1 = 'adolf';
let str2 = 'ngaboisaac';
 console.log(solution(str1))
 console.log(solution(str2))