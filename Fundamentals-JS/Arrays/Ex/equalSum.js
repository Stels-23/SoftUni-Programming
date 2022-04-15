function equalSum(arr) {
    let hasEqualsSum = false;
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0; // съзаваме променливи за лявата и дясната страна
        let rightSum = 0;
        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];

        }
        for (let n = i + 1; n < arr.length; n++) {
            rightSum += arr[n];
        }
        if (leftSum === rightSum) {
            console.log(i);
            hasEqualsSum = true
        }
    }
    if (!hasEqualsSum) {
        console.log("no");
    }

}
equalSum([1, 2, 3, 3]);
equalSum([1, 2]);
equalSum([1]);
equalSum([1, 2, 3]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);