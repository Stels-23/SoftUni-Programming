function neighbors(matrix) {
    let pairs = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if ((j + 1 < matrix[i].length) && (matrix[i][j] === matrix[i][j + 1])) {
                pairs++;
            }
            if (i + 1 < matrix.length && matrix[i][j] === matrix[i + 1][j]) {
                pairs++
            }


        }
    }
    console.log(pairs);
}

neighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
])
neighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
])