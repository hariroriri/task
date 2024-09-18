function reverseNumber(num) {
    // Convert the number to a string, split it into an array, reverse the array, and join it back
    const reversed = num.toString().split('').reverse().join('');
    
    // Convert the reversed string back to a number and return it
    return parseInt(reversed, 10);
  }
  
  // Example usage:
  const num = 12345;
  const reversedNum = reverseNumber(num);
  console.log(reversedNum); // Output: 54321
  