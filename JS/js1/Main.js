function ageGroups(age) {
    if (age >= 0 && age <= 2) return "младенец";
    else if (age >= 3 && age <= 13) return "ребенок";
    else if (age >= 14 && age <= 19) return "подросток";
    else if (age >= 20 && age <= 65) return "взрослый";
    else if (age >= 66) return "пожилой";
    else return "Неверный возраст";
}

function roundNumber(num, precision) {
    if (precision > 15) precision = 15;
    let factor = Math.pow(10, precision);
    let rounded = Math.round(num * factor) / factor;
    return parseFloat(rounded.toFixed(precision));
}

function findLargestDivisor(num) {
    const divisors = [10, 6, 7, 3, 2];
    for (let divisor of divisors) {
        if (num % divisor === 0) {
            return `Число ${num} делится на ${divisor}`;
        }
    }
    return "Не делится";
}

function calculateVacationCost(groupSize, groupType, dayOfWeek) {
    const prices = {
        Students: { Friday: 8.45, Saturday: 9.80, Sunday: 10.46 },
        Corporate: { Friday: 10.90, Saturday: 15.60, Sunday: 16 },
        Regular: { Friday: 15, Saturday: 20, Sunday: 22.50 }
    };

    let pricePerPerson = prices[groupType][dayOfWeek];
    let totalPrice = groupSize * pricePerPerson;

    if (groupType === "Students" && groupSize >= 30) {
        totalPrice *= 0.85;
    } else if (groupType === "Corporate" && groupSize >= 100) {
        totalPrice -= 10 * pricePerPerson;
    } else if (groupType === "Regular" && groupSize >= 10 && groupSize <= 20) {
        totalPrice *= 0.95;
    }

    return `Для группы ${groupType} размером в ${groupSize} человек \nОбщая цена: ${totalPrice.toFixed(2)}`;
}

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "\nyes";
    } else {
        return "\nno";
    }
}

// Тесты
console.group('Задание 1');
console.log('Возраст 35 —',ageGroups(35));
console.log('Возраст 1 —',ageGroups(1));
console.log('Возраст 100 —',ageGroups(100));
console.log('Возраст 5 —',ageGroups(5));
console.log('Возраст -10 —',ageGroups(-10));
console.groupEnd();

console.log('-----------------------------');

console.group('Задание 2');
console.log('Число : 3.1415926535897932384626433832795,','Количество знаков после запятой = 2',roundNumber(3.1415926535897932384626433832795, 2));
console.log('Число : 10.5,','Количество знаков после запятой = 3',roundNumber(10.5, 3));
console.groupEnd();

console.log('-----------------------------');

console.group('Задание 3');
console.log(findLargestDivisor(30));
console.log(findLargestDivisor(15));
console.log(findLargestDivisor(12));
console.log(findLargestDivisor(1643));
console.groupEnd();

console.log('-----------------------------');

console.group('Задание 4');
console.log(calculateVacationCost(30, "Students", "Sunday"));
console.log(calculateVacationCost(40, "Regular", "Saturday"));
console.groupEnd();

console.log('-----------------------------');

console.group('Задание 5');
console.log("1984 год високосный?",isLeapYear(1984));
console.log("\n2003 год високосный?",isLeapYear(2003));
console.log("\n4 год високосный?",isLeapYear(4));
console.groupEnd();

console.log('-----------------------------');