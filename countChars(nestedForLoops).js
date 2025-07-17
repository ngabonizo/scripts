function countChars(str) {
  const counted = [];

  const result = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    
    // Check if we've already counted this char
    let alreadyCounted = false;
    for (let j = 0; j < counted.length; j++) {
      if (counted[j] === char) {
        alreadyCounted = true;
        break;
      }
    }

    if (!alreadyCounted) {
      let count = 0;
      for (let k = 0; k < str.length; k++) {
        if (str[k] === char) {
          count++;
        }
      }

      result[char] = count;
      counted.push(char); // Mark as counted
    }
  }

  return result;
}


let str = 'Dont worry';
console.log(countChars(str));



