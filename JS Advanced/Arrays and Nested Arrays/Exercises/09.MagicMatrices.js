/*function magicMatrices(matrix) {
    let isMagicalNumber = true;
    for (let i = 0; i < matrix.length; i++) {
        let currentRow = matrix[i][i];
        let nextRow = matrix[i][i + 1];
        let currentCol = 0;
        let nextCol = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            currentCol = matrix[i + 1][j];
            nextCol = matrix[j][j + 1]

            if (currentRow === currentCol || nextRow === nextCol) {
                return isMagicalNumber;
            } else {
                isMagicalNumber = false;

            }
        }
    }


}*/

function magicMatrices(matrix) {
    let isMagicalNumber = true;
    for (let i = 0; i < matrix.length - 1; i++) {
        //с 1 единица по-малко да върти цикъла, за да не гърми програмат
        let sumCurrentRow = matrix[i].reduce((a, b) => a + b, 0); // стратовата ни стойност е нула
        let sumNextRow = matrix[i + 1].reduce((a, b) => a + b, 0);
        //трябва ни 2-ри цикъл, по който да циклим и затова си създаваме променлива, която да съхранява от следващия цикъл
        let sumCurrentCol = 0;
        let sumNextCol = 0;
        for (let j = 0; j < matrix.length; j++) {
            //const element = matrix[j];
            sumCurrentCol += matrix[i][j];
            sumNextCol += matrix[i + 1][j];
        }
        if (sumCurrentRow !== sumNextRow || sumCurrentCol !== sumNextCol) {
            isMagicalNumber = false;
        }
    }
    return isMagicalNumber;
}
console.log(
    magicMatrices([
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5],
    ])
);
console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
]));
console.log(magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
]));