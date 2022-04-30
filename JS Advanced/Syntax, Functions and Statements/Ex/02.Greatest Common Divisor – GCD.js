function greatestCommonDivision(num1, num2) {
    let result = 0;
    while (num2) {
        result = num2;
        num2 = num1 % num2;
        num1 = result;
    }
    console.log(result)
}
greatestCommonDivision(15, 5);
console.log('============');
greatestCommonDivision(2154, 458)