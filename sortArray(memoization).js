function sumArraySorted(arr) {
  const key = [...arr].sort((a, b) => a - b).join(",");
  sumArraySorted.cache = sumArraySorted.cache || {};

  if (sumArraySorted.cache[key]) return sumArraySorted.cache[key];

  const res = arr.reduce((sum, num) => sum + num, 0);
  sumArraySorted.cache[key] = res;
  return res;
}


let a = [1,2,3,4,5,6];
console.log(sumArraySorted(a))