const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function binaryToDecimal(binaryString) {
    if (!/^[01]{8}$/.test(binaryString)) {
        return "Ошибка: Введите 8-битное двоичное число (только 0 и 1)";
    }

    const decimal = parseInt(binaryString, 2);
    return decimal;
}

readline.question('Введите 8-битное двоичное число: ', (binary) => {
    const result = binaryToDecimal(binary);
    console.log(`Двоичное число ${binary} в десятичной системе равно: ${result}`);
    readline.close();
});
