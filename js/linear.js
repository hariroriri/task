function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; 
      }
    }
    return -1; 
  }
  
  const arr = [10, 25, 30, 40, 55, 70];
  const target = 40;
  
  const index = linearSearch(arr, target);
  
  if (index !== -1) {
    console.log(`Element found at index ${index}`);
  } else {
    console.log('Element not found in the array');
  }
  