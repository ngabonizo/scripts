function add(a, b){
  add.cache = add.cache || {};
  const key = `${a},${b}`;
   if(add.cache[key]) return add.cache[key];
   const result = a + b;
   add.cache[key] = result;
   return result;
};

console.log(add(2,3));// 5 (calculated)
console.log(add(2,3)); //5 (from cache)

//benefits of memoization
// increases performance for functions with repeated calls
// reduce inncessary computation;

//summary: memoization saves the results of function calls and reuses them when the same inputs occur, making programs faster and efficient