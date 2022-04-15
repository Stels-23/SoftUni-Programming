function numberModification(number) {
    let separate = number.toString();
    let average = 0;
    let add = 9;
    //променлива за separete.length  не се прави, тъй като average при разделяне ставя нула
    for (let i = 0; i < separate.length; i++) {
        average += Number(separate[i]);
    }
    average /= separate.length;
    while (average < 5) {
        for (let i = 0; i < separate.length; i++) {
            average += Number(separate[i]);
            //separate.push('9');
        }
        average /= separate.length;
        separate += add;
    }
    console.log(separate)
}

/*function numberModification(number) {
    let numberAsString = number.toString()
    let avarageSum = 0;

    for (let i = 0; i < numberAsString.length; i++) {

        avarageSum += Number(numberAsString[i]);

    }
    avarageSum /= numberAsString.length;

    while (avarageSum < 5) {

        for (let i = 0; i < numberAsString.length; i++) {

            avarageSum += Number(numberAsString[i]);

        }
        avarageSum /= numberAsString.length;

        numberAsString += 9;

    }
    console.log(numberAsString);
}*/

/*if (average >= 5) {
        console.log(separate.join(''));
        isSmallestResult = false;
    }
    let numIsLOneOrTwo = separateL - 1;
    if (numIsLOneOrTwo == 1 || numIsLOneOrTwo == 2) {
        separate.pop();
        console.log(separate.join(''));
        return;
    }
    if (isSmallestResult) {
        console.log(separate.join(''));
    } // Изкарва вярни резултати, но в Джъдж не я дава вярна
}*/
/*

function numberModification(modifiedN) {


    while (getAverage(modifiedN) < 5) {
        modifiedN += "9"
    }
    console.log(modifiedN)

    function getSum(number) {
        let numToString = number.toString();
        let sum = 0;
        for (let i = 0; i < numToString.length; i++) {
            sum += Number(numToString[i]);
        }
        return sum;


    }

    function getAverage(num) {
        return getSum(num) / num.toString().length;
    }
}

function numberModification(number) {
    let getDigitsAverage = num => num.toString().split('').map(Number).reduce((a, b) => a + b, 0) / num.toString().length;
    while (getDigitsAverage(number) < 5) number += '9';
    console.log(number)

}*/
numberModification(101);
console.log('------------');
numberModification(5835);