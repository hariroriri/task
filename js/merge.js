// Merge function to combine two sorted arrays into one sorted array
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Merge the arrays while there are elements in both arrays
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concatenate any remaining elements from both arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Recursive Merge Sort function
  function mergeSort(array) {
    if (array.length <= 1) {
      return array; // Base case: an array of length 1 is already sorted
    }
  
    // Find the middle point of the array
    const middle = Math.floor(array.length / 2);
  
    // Recursively split and sort the subarrays
    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));
  
    // Merge the sorted subarrays
    return merge(left, right);
  }
  
  // Example usage
  const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = mergeSort(unsortedArray);
  
  console.log(`Sorted Array: ${sortedArray}`); // Output: Sorted Array: [3, 9, 10, 27, 38, 43, 82]
   