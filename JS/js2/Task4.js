const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(number1, operator, number2) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                return "Ошибка: Деление на ноль";
            }
            result = number1 / number2;
            break;
        default:
            return "Ошибка: Неверный оператор";
    }

    return result.toFixed(2);
}

readline.question('Введите первое число: ', (number1) => {
    readline.question('Введите оператор (+, -, *, /): ', (operator) => {
        readline.question('Введите второе число: ', (number2) => {
            const result = calculate(parseFloat(number1), operator, parseFloat(number2));
            console.log(`Результат: ${result}`);
            readline.close();
        });
    });
});
