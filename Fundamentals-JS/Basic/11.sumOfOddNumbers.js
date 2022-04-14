function sumOfOdd(n) {
    let totalSum = 0;
    let num = 1;
    for (let i = 1; i <= n; i++) {
        console.log(num);
        totalSum += num;
        num += 2

    }

    console.log(`Sum: ${totalSum}`);
}
sumOfOdd(5)