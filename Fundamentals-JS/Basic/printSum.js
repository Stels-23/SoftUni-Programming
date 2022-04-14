function printSum(start, end) {
    let total = 0;
    let num = "";
    for (let i = start; i <= end; i++) {
        total += i;
        num += i + " "
    }

    console.log(num);
    console.log(`Sum: ${total}`);

}
printSum(5, 10)

//  (0,26) (50,60)