/*function distinctArr(arr) {
    let arrL = arr.length; //Никога да не правя отделна променлива за дължината!!! Прави бъгове
    let currentElement1;
    let currentElement2;
    for (let i = 0; i < arr.length; i++) {
        currentElement1 = arr[i];
        //console.log(currentElement);
        for (let j = i + 1; j < arr.length; j++) {
            currentElement2 = arr[j];
            if (currentElement1 === currentElement2) {
                arr.splice(j, 1);
                j = j - 1

                //slice работи само със стрингове, затова не го ползваме
            }
        }
    }

    console.log(arr.join(' '));
}
//друг вариант
function distinctArr(arr) {
    let newArr = [];
    for (let number of arr) {
        if (!newArr.includes(number)) {
            newArr.push(number);
        } //ако числото е еднакво нищо няма да прави, т.е. ще прескочи числото
    }
    console.log(newArr.join(' '));
}*/
function distinctArr(arr) {
    let newArr = [];
    arr.map((currNum) => {
        if (!newArr.includes(currNum)) {
            newArr.push(currNum);
        }

    });
    console.log(newArr.join(" "));
}
distinctArr([1, 2, 3, 4]);
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArr([20, 8, 12, 13, 4, 4, 8, 5]);