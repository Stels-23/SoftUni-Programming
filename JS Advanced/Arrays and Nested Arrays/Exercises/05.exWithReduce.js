function extractBigN(array) {
    let newArr = [];
    let biggestN = array[0];
    newArr.push(biggestN);
    array.reduce((num1, num2, index, arr) => {
        if (biggestN <= num2) {
            newArr.push(num2);
            biggestN = num2;
        }

    });


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
