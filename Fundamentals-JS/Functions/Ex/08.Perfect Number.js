function perfectNumber(number) {
    let currNum = 0;

    for (let i = 1; i <= number - 1; i++) { // number / 2
        if (number % i === 0) {
            currNum += i
        }
    }
    if (currNum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}
perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)