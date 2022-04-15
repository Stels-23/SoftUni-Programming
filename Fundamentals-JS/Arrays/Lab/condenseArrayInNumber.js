/*function condenseArrayInNumber(arr) {
    let condensed = [];
    for (let n of arr) { // проверка на целия масив, т.е. обхождаме го
        condensed.push(n)// добавят се елементите от стария към кондензирания масив
    }
    while (condensed.length > 1) {
        let temp = [];//създаваме още 1 празен масив, в който поместваме събраните елементи
        for (let i = 0; i < condensed.length - 1; i++) {
            temp.push(condensed[i] + condensed[i + 1]); // събират се елементите от масива по 2-ки, т.е. първият елемент с в втория и втория с третия и т.н... 
        }
        condensed = temp// презаписва се в конденз

    }
    console.log(condensed[0]); // за да се визуализира в конзолата цяло число, а не масив, трябва да сложим литерал от 0, за да покаже първоначалната си стойност 
}
function condenseArrayInNumber(nums) {
    while (nums.length > 1) {
        let condensed = Array(nums.length - 1); // брояч на елементите в масива
        for (let i = 0; i < nums.length - 1; i++) { // може i <= nums.length
            condensed[i] = Number(nums[i]) + Number(nums[i + 1]);
        }
        nums = condensed;
    }
    console.log(nums[0]) // излиза цяло число
}
//и с рекурсия
function condenseArrayInNumber(nums) {
    if (nums.length === 1) {
        console.log(nums[0]);
        return;
    }
    for (let i = 0; i < nums.length - 1; i++) {
        nums[i] = Number(nums[i]) + Number(nums[i + 1]);
    }
    nums.pop();
    condenseArrayInNumber(nums);
}*/
function condenseArrayInNumber(arr) {
    let num = [];
    for (let i = 0; i < arr.length; i++) {
        num[i] = Number(arr[i]);
    }
    while (num.length > 1) {
        let condense = [];
        for (let i = 0; i < num.length - 1; i++) {
            condense[i] = Number(num[i] + num[i + 1]);

        }
        num = condense;
        //condense = 0;
    }
    console.log(Number(num));
}
condenseArrayInNumber([2, 10, 3]);
condenseArrayInNumber([5, 0, 4, 1, 2]);
condenseArrayInNumber([1]);