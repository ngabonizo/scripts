function maximumSeating(seats) {
   return Math.floor((seats+2)/3)
}

console.log(maximumSeating(8))


function maximumSeating(seats) {
  let count = 0;
  
  seats.slice().forEach((_, i, arr) => {
    if (arr.slice(Math.max(0, i - 2), i + 3).every((n) => !n)) {
      count++;
      arr[i] = 1;
    }    
  });
   
  return count;
}

function maximumSeating(seats) {
  let result = 0
  
  for (let i = 0; i < seats.length; i++) {
    if ((seats[i - 2] || 0) + (seats[i - 1] || 0) + seats[i] + (seats[i + 1] || 0) + (seats[i + 2] || 0) === 0) {
      seats[i] = 1
      result++
    }
  }
  
  return result;
}