function rotateArray(arr, positions) {
    const length = arr.length;
    const normalizedPositions = positions % length;

    const rotated = [...arr];

    for (let i = 0; i < normalizedPositions; i++) {
        const first = rotated.shift();
        rotated.push(first);
    }

    return rotated;
}

const test1 = [51, 47, 32, 61, 21];
console.log('Исходный массив:', test1);
console.log('Результат после 2 оборотов:', rotateArray(test1, 2).join(' '));

const test2 = [2, 4, 15, 31];
console.log('Исходный массив:', test2);
console.log('Результат после 5 оборотов:', rotateArray(test2, 5).join(' '));
