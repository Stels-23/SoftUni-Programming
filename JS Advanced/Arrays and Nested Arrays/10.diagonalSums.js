function diagonalSums(matrix) {
    //const diagonalSum = matrix => {
    let digitLeft = 0;
    let digitRight = 0;
    for (let i = 0; i < matrix.length; i++) {
        let leftSide = matrix[i][i];
        let rightSide = matrix[i][matrix.length - 1 - i]
        digitLeft += leftSide;
        digitRight += rightSide;
    }
    console.log(digitLeft, digitRight)
}

diagonalSums([
    [20, 40],
    [10, 60]
]);
console.log('======');
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
])