function equalNeighbors(matrix) {
    let points = 0;
    const rowSize = matrix[0].length;
    const matrixSize = matrix.length;
    //проверка на редовете;
    for (let rowIndex = 0; rowIndex < matrixSize; rowIndex++) {
        for (let colIndex = 0; colIndex < matrix[rowIndex].length - 1; colIndex++) {
            if (matrix[rowIndex][colIndex] === matrix[rowIndex][colIndex + 1]) {
                points++;
            }
        }
    }
    //console.log('===========');
    //проверка на колоните
    for (let colIndex = 0; colIndex < rowSize; colIndex++) {
        for (let rowIndex = 0; rowIndex < matrix.length - 1; rowIndex++) {
            if (matrix[rowIndex][colIndex] === matrix[rowIndex + 1][colIndex]) {
                points++;
            }

        }
    }
    console.log(points);
}
equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
])
equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
])