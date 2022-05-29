function extractBigN(array) {
    let newArr = [];
    let biggestN = array[0];
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (num >= biggestN) {
            biggestN = num;
            newArr.push(biggestN);

        }
    }
    console.log(newArr)
}
extractBigN([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);
extractBigN([1,
    2,
    3,
    4
]);
extractBigN([20,
    3,
    2,
    15,
    6,
    1
]);