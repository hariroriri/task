function bubbleSort(array) {
    let n = array.length;
    let swapped;
  
    // Traverse through all array elements
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        // Compare adjacent elements
        if (array[i] > array[i + 1]) {
          // Swap if the element is greater than the next element
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      }
      // Each pass places the largest element at the end of the array
      // Reduce the effective size of the array by 1
      n--;
    } while (swapped);
  
    return array;
  }
  
  // Example usage
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = bubbleSort(unsortedArray);
  
  console.log(`Sorted Array: ${sortedArray}`); // Output: Sorted Array: 11,12,22,25,34,64,90
  