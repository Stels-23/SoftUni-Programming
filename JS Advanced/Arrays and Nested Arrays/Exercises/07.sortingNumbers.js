function sortingNumbers(numbers) {
    let result = [];
    numbers.sort((a, b) => b - a);
    //console.log(numbers);
    let lastN = numbers.pop();
    let firstN = numbers.shift();
    while (numbers.length >= 0) {
        if (typeof(firstN) === 'undefined' && typeof(lastN) === 'undefined') {
            break;
        } else {
            result.push(lastN, firstN);
        }


        lastN = numbers.pop();
        firstN = numbers.shift();
    }
    return result;

}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);