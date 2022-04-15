function magicNum(arr, n) {
    for (let i = 0; i < arr.length; i++) { // 1, 7, 6, 2, 19, 23
        let el1 = arr[i];
        for (let j = i + 1; j < arr.length; j++) { //1+7, 1+6, 1+2, 1+19, 1+23.... 7+6, 7+2, 7+19
            let el2 = arr[j];
            let sumary = el1 + el2;

            if (sumary === n) {
                console.log(`${el1} ${el2}`)
            }
        }
    }

}
magicNum(
    [1, 7, 6, 2, 19, 23],
    8
);

magicNum(
    [14, 20, 60, 13, 7, 19, 8],
    27
);
magicNum(
    [1, 2, 3, 4, 5, 6],
    6
);