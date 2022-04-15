/*function sumFAndL(arr) {
    let firstNumber = arr.shift();
    let lastNumber = arr.pop();
    let sumary = Number(firstNumber) + Number(lastNumber);
    console.log(sumary);

}
sumFAndL(['5']); //идва NaN, ако е само 1-число
sumFAndL(['20', '30', '40']);
sumFAndL(['5', '10']);

function sumFAndL(arr) {
    let firstN = Number(arr[0]);
    let lastN = Number(arr[arr.length - 1]);// взима последния елемент
    let sum = firstN + lastN;
    console.log(sum);
}
sumFAndL(['5']); //при този код не дава NaN на 1 подадено число/стринг, тъй като и да има само 1-елемент, този елемент ще е 1-ви и последен
sumFAndL(['20', '30', '40']);
sumFAndL(['5', '10']);
*/

function sumFAndL(arr) {

    let newArr = arr.map(Number); // превръща всички стрингове в 
    let firstN = newArr[0];
    let lastN = newArr[newArr.length - 1];
    let sumary = firstN + lastN;
    console.log(sumary);
    // console.log(newArr);
    //console.log(arr)
}

sumFAndL(['5']);
console.log('---------------');
sumFAndL(['20', '30', '40']);
console.log('---------------');
sumFAndL(['5', '10']);