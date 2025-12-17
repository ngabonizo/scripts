/**
 * Custom sort function (Bubble Sort implementation)
 * Sorts an array of numbers in ascending order without using the built-in sort() method.
 *
 * 
 */
function customSort(arr) {
    const n = arr.length;
    // Create a copy of the array to avoid modifying the original array in place
    const arrayCopy = [...arr];

    // Outer loop traverses all elements in the array
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        // Inner loop is for comparisons
        for (let j = 0; j < n - 1 - i; j++) {
            // Compare adjacent elements
            if (arrayCopy[j] > arrayCopy[j + 1]) {
                // Swap arrayCopy[j] and arrayCopy[j + 1]
                [arrayCopy[j], arrayCopy[j + 1]] = [arrayCopy[j + 1], arrayCopy[j]];
                swapped = true;
            }
        }

        // If no two elements were swapped by inner loop, then the array is already sorted
        if (!swapped) {
            break;
        }
    }

    return arrayCopy;
}

// --- Example Usage ---
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", numbers);

const sortedNumbers = customSort(numbers);
console.log("Sorted array:", sortedNumbers); // Output: Sorted array: [11, 12, 22, 25, 34, 64, 90]

const anotherArray = [5, 1, 4, 2, 8];
console.log("Original array:", anotherArray);
console.log("Sorted array:", customSort(anotherArray)); // Output: Sorted array: [1, 2, 4, 5, 8]
