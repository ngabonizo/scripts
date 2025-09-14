function removeDuplicates(arr){
  return arr.reduce((acc, num) => {
    if(!acc.includes(num)) acc.push(num);
    return acc;
  },[])
};

const nums = [1, 2, 3, 2, 4, 1, 5];
console.log(removeDuplicates(nums))