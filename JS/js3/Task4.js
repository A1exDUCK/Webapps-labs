function isMagicalMatrix(matrix) {
    if (!matrix || matrix.length === 0) {
        return false;
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < rows; i++) {
        if (matrix[i].length !== cols) {
            return false;
        }
    }

    const targetSum = matrix[0].reduce((sum, num) => sum + num, 0);

    for (let i = 1; i < rows; i++) {
        const rowSum = matrix[i].reduce((sum, num) => sum + num, 0);
        if (rowSum !== targetSum) {
            return false;
        }
    }

    for (let j = 0; j < cols; j++) {
        let colSum = 0;
        for (let i = 0; i < rows; i++) {
            colSum += matrix[i][j];
        }
        if (colSum !== targetSum) {
            return false;
        }
    }

    return true;
}

console.log(isMagicalMatrix([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));
console.log(isMagicalMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

