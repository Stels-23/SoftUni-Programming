/*function sumary(firstNum, secondNum, thirdNum) {
    function sumOfTwoNums(fNum, sNum) {
        let sumary = fNum + sNum;
        return sumary;
    }
    let sum = sumOfTwoNums(firstNum, secondNum)
    function substract(sum, thirdN) {
        let result = sum - thirdN;
        return result;
    }
    let finalResult = substract(sum, thirdNum)
    console.log(finalResult);
}
function sumary(firstNum, secondNum, thirdNum) {
    function sumOfTwoNums(fNum, sNum) {
        let sumary = fNum + sNum;
        return sumary;
    }

    function substract(sum, thirdN) {
        let result = sum - thirdN;
        return result;
    }
    let sum = sumOfTwoNums(firstNum, secondNum)

    let finalResult = substract(sum, thirdNum)
    console.log(finalResult);
}*/
function addAndSubstract(num1, num2, num3) {
    function add(firstNum, secondNum) {
        return firstNum + secondNum;
    }
    let substract = (addResult, thirdNumber) => addResult - thirdNumber;
    let result = add(num1, num2);
    let finalResult = substract(result, num3);
    console.log(finalResult);
}
addAndSubstract(23, 6, 10);
addAndSubstract(1, 17, 30);
addAndSubstract(42, 58, 100);