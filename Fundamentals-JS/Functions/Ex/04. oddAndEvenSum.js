/*function oddAndEvenSum(input) {
    let inputAsStr = input.toString();
    let inputL = inputAsStr.length; // трябва да приема стринг и тогава да му мерим дължината!!!
    let currentElement = 0;
    let takeOddSum = function(numAsStr) { // подаваме елемента долу при извикването
        let oddSum = 0; // създаваме променлива за нечетната сума
        for (let i = 0; i < inputL; i++) { //минаваме по всички елементи-индекси
            currentElement = Number(numAsStr[i]) // преобразуваме елемнтите в число, за да може да свери числото дали е четно или нечетно
            if (currentElement % 2 !== 0) {
                oddSum += currentElement;

            }
        }
        return oddSum;
    };
    let takeEvenSum = (numAsStr) => {
        // input "1000435"
        let evenSum = 0; // създаваме променлива за четната сума

        for (let i = 0; i < inputL; i++) {
            currentElement = Number(numAsStr[i]);
            if (currentElement % 2 === 0) {
                evenSum += currentElement;
            }
        }
        return evenSum;

    };
    let resultForEvenSum = takeEvenSum(inputAsStr); //връщащ резултат
    let resultForOddSum = takeOddSum(inputAsStr); //връщащ резултат
    console.log(`Odd sum = ${resultForOddSum}, Even sum = ${resultForEvenSum}`);


}*/
function oddAndEvenSum(number) {
    let numberAsText = number.toString();

    function totalOddSum(numAsString) {
        let oddSum = 0;
        for (let index = 0; index < numAsString.length; index++) {
            let curNum = Number(numAsString[index]);
            if (curNum % 2 !== 0) {
                oddSum += curNum;
            }
        }
        return oddSum;
    }

    function totalEvenSum(numAsText) {
        let evenSum = 0;
        for (let index = 0; index < numAsText.length; index++) {
            let curNum = Number(numAsText[index]);
            if (curNum % 2 === 0) {
                evenSum += curNum;
            }
        }
        return evenSum;
    }
    console.log(
        `Odd sum = ${totalOddSum(numberAsText)}, Even sum = ${totalEvenSum(
        numberAsText
      )}`
    );
}

oddAndEvenSum(1000453);

function oddAndEvenSum(num) {
    function sumOddNums(odd) {
        let sumOdd = 0;
        for (let i = 0; i < length; i++) {
            if (odd[i] % 2 !== 0) {
                sumOdd += Number(odd[i]);
            }
        }
        return sumOdd;
    }

    function sumEven(even) {
        let sumEven = 0;
        for (let i = 0; i < length; i++) {
            if (even[i] % 2 === 0) {
                sumEven += Number(even[i]);
            }
        }
        return sumEven;
    }

    let numAsString = num.toString();
    let length = numAsString.length;

    console.log(
        `Odd sum = ${sumOddNums(numAsString)}, Even sum = ${sumEven(numAsString)}`
    );
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);