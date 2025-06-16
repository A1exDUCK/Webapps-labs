function task2(arr1, arr2) {
    const commonElements = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            if (!commonElements.includes(arr1[i])) {
                commonElements.push(arr1[i]);
            }
        }
    }

    if (commonElements.length > 0) {
        console.log('Общие элементы:', commonElements.join(', '));
    } else {
        console.log('Общих элементов не найдено');
    }

    return commonElements;
}


const array1 = ['Hey', 'hello', 2, 4, 'Peter', 'e'];
const array2 = ['Petar', 10, 'hey', 4, 'hello', '2'];

console.log('Первый массив:', array1);
console.log('Второй массив:', array2);
task2(array1, array2);


const chars1 = ['R', 'u', 's', 's', 'i', 'a'];
const chars2 = ['R', 'u', 't'];

console.log('\nПервый массив:', chars1);
console.log('Второй массив:', chars2);
task2(chars1, chars2);
