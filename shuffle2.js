function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const numbers = [1, 2, 3, 4, 5, 6];
const shuffled = shuffleArray([...numbers]); // Use spread to keep the original array unchanged
console.log('Original:', numbers);
console.log('Shuffled:', shuffled);
