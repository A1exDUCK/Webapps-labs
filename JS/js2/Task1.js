function sumOfDigits(num) {
    const digits = Math.abs(num).toString().split('');

    return digits.reduce((sum, digit) => sum + parseInt(digit), 0);
}


console.log('Сумма цифр числа 245678:', sumOfDigits(245678));
console.log('Сумма цифр числа 97561:', sumOfDigits(97561));
console.log('Сумма цифр числа 543:', sumOfDigits(543));
