function isPalindromeNumber(num) {
    // Convert number to string to compare digits
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}


const number = 121;
if (isPalindromeNumber(number)) {
    console.log(`${number} is a palindrome`);
} else {
    console.log(`${number} is not a palindrome`);
}
