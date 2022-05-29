function sortingNumbers(numbers) {
    let result = [];
    numbers.sort((a, b) => b - a);
    //console.log(numbers)
    while (numbers.length > 0) {
        // or numbers.length !== 0
        result.push(numbers.pop());
        result.push(numbers.shift());

    }
    return result;

}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
