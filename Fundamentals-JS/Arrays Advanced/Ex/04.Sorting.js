function sorting(arr) {
    arr = arr.sort((a, b) => b - a);
    let newArr = [];
    while (arr.length > 0) {
        let biggerN = arr.shift();
        newArr.push(biggerN);
        let smallerN = arr.pop();
        newArr.push(smallerN);
    }
    console.log(newArr.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);