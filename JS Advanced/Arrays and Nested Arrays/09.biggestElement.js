function biggestElement(matrix) {
    let bigN = [];
    for (let row of matrix) {
        biggestNumber = Math.max(...row)
        bigN.push(biggestNumber)


    }
    //let biggestNumber = Math.max(...merge);
    console.log(Math.max(...bigN));

}
biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]);
console.log('=====');
biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);