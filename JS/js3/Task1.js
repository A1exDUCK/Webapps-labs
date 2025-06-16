function modifyArray(arr) {
    const modifiedArr = [...arr];

    const originalSum = arr.reduce((sum, num) => sum + num, 0);

    for (let i = 0; i < modifiedArr.length; i++) {
        if (modifiedArr[i] % 2 === 0) {
            modifiedArr[i] += i;
        } else {
            modifiedArr[i] -= i;
        }
    }

    const modifiedSum = modifiedArr.reduce((sum, num) => sum + num, 0);

    // Выводим результаты
    console.log('Новый массив:', modifiedArr);
    console.log('Сумма чисел исходного массива:', originalSum);
    console.log('Сумма чисел измененного массива:', modifiedSum);

    return {
        modifiedArray: modifiedArr,
        originalSum: originalSum,
        modifiedSum: modifiedSum
    };
}

const numbers = [1, 2, 3, 4, 5];
modifyArray(numbers);
