function processOddPositions(numbers) {
    const oddNums = [];
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 != 0) {
            let multipleN = Number(numbers[i]) * 2;
            oddNums.push(multipleN);
        }
    }
    return oddNums.reverse()

}
console.log(processOddPositions([10, 15, 20, 25]));
console.log('==========');
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));