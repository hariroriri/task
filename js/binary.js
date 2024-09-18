function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midValue = array[mid];
  
      if (midValue === target) {
        return mid; 
      } else if (midValue < target) {
        left = mid + 1; 
      } else {
        right = mid - 1; 
      }
    }
  
    return -1;
  }
  
  // Example usage
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  const targetValue = 13;
  const index = binarySearch(sortedArray, targetValue);
  
  console.log(`Index of ${targetValue}: ${index}`); 
  