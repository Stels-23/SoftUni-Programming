function addAndSubstract(arr) {
    let myArr = arr; // за да спестим от цикли
    let sumOfOriginalArr = 0;
    let modifiedArr = 0;
    for (let i = 0; i < myArr.length; i++) {
        sumOfOriginalArr += myArr[i];

        if (myArr[i] % 2 === 0) { //even number
            myArr[i] += i;

        } else {
            myArr[i] -= i; //odd number
        }
        modifiedArr += myArr[i];
    }
    console.log(myArr);
    console.log(sumOfOriginalArr);
    console.log(modifiedArr);
}
addAndSubstract([5, 15, 23, 56, 35]);
addAndSubstract([-5, 11, 3, 0, 2]); // нулата се води качо четно число и се добавя позицитя, която е 3