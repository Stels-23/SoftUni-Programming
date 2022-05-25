function negativePositive(numbers) {
    //let result = numbers.sort((a, b) => a - b);
    let result = [];
    for (let n of numbers) {
        if (n < 0) {
            result.unshift(n);
        } else {
            result.push(n);
        }

    }
    for (let num of result) {
        console.log(num)
    }

    // console.log(result.join('\n'));

}
negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1]);