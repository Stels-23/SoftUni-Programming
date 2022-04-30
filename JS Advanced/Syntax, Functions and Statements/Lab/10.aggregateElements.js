function aggregateElements(input) {

    let collection = input.reduce((a, b) => a + b);
    let totalSumOfDivision = 0;
    for (let num of input) {
        let division = 1 / num;
        totalSumOfDivision += division;
    }
    let concatElements = input.join('')
    console.log(collection);
    console.log(totalSumOfDivision);
    console.log(concatElements);
}
aggregateElements([1, 2, 3]);
console.log('=============');
aggregateElements([2, 4, 8, 16])