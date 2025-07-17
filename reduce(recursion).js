function reduce(nums, fn, init) {
   if(!Array.isArray(nums) || typeof fn !== 'functoin') throw new Error('invalid input!');
   if(nums.length === 0) return init;

  function helper(index, acc) {
    if (index === nums.length -1) { // nums.length - 1 is the last index
      return acc;
    }
    return helper(index + 1, fn(acc, nums[index]));
  }

  return helper(0, init);
}

const nums = [1, 2, 3, 4];
const fn = (acc, curr) => acc + curr;
const init = 0;

console.log(reduce(nums, fn, init)); // Output: 10
