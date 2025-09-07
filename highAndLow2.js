
function highAndLow(numbers){
  let splitNums = numbers.split('');
  let highest = parseInt(splitNums[0]);
  let lowest = parseInt(splitNums[0]);

splitNums.forEach((value) => {
  if(parseInt(value) > highest) highest = value;
})

splitNums.forEach((value) => {
  if(parseInt(value) < lowest)  lowest = value;
})
 return `${highest}  ${lowest}`;
}

let num = '1,2,3,15,4,5,-1';
console.log(highAndLow(num));