function findMin(a,numbers) {
    const min = Math.min(a, numbers[0], numbers[1]);
    console.log('Минимальное число:', min);
    return min;
}

findMin(600,[123,425]);
