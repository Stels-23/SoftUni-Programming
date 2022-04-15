/*function sumArrayElements(input) {
    let firstElement = input[0];
    let lastElement = input[input.length - 1] // така се взима последната стойност на елемента
    let sumOfFirstAndLastElement = firstElement + lastElement;
    console.log(sumOfFirstAndLastElement)
}
sumArrayElements([20, 30, 40]); */ //60
//[10,17,22,33] - 43
// [11,58,69] - 80
function sumFAndL(input) { // заема една стойност тъйкато ни е необходимо след това да ги разделим елемнтите в отделни променливи
    let firstN = input[0] // вземаме 1-я елемнт от масива
    let lastN = input[input.length - 1]; //ако е -2 (вместо -1) - взима 2-я елемнт от масива
    let sumDigit = firstN + lastN;
    console.log(sumDigit);

}
sumFAndL([11, 58, 69])