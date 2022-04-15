function processOddNums(arr) {
    let newArr = [];
    let sum = 0;
    let result = "";

    for (let element = 0; element < arr.length; element++) {
        if (element % 2 == 1) {
            let elFromArr = arr[element];
            sum = elFromArr * 2;
            result = sum.toString()
            newArr.push(sum);

        }
    }
    let reversedResult = newArr.reverse().join(" ") //тука .split не трябва, тъй като е масив

    console.log(reversedResult)

}
processOddNums([10, 15, 20, 25]);
processOddNums([3, 0, 10, 4, 7, 3]);