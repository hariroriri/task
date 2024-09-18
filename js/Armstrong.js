function isArmstrongNumber(num) {
    const digits = num.toString();
    const numDigits = digits.length;
    
    let sum = 0;
    for (let digit of digits) {
        sum += Math.pow(parseInt(digit), numDigits);
    }
    
    return sum === num;
}

const number = 154;
if (isArmstrongNumber(number)) {
    console.log(`${number} is an Armstrong number`);
} else {
    console.log(`${number} is not an Armstrong number`);
}
