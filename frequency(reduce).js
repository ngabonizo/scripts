function occurance(arr){
  return arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  },[]);
}

let fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
console.log(occurance(fruits))