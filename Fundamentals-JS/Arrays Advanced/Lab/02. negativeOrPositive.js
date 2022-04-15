function negativeOrPositiveN(arr) {
    let newArr = [];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        counter = Number(arr[i]);
        if (counter < 0) {
            newArr.unshift(arr[i]); // ще добавя всеки елемент в началото на масива

        } else {
            newArr.push(arr[i]); // ще избута всеки елемент в края на масива

        }
    }
    let result = newArr.join("\n")
    console.log(result);

    //let elementsMakesAsNums = newArr.map(Number);// Може да превръща елементите от стрингове в числа, но все още си остава масив
    //затова не е необходимо да се map-ва, по-добре е с метода join-от масив превръща в стринг, може и да се ползва като разделител на елементите

}
negativeOrPositiveN(['7', '-2', '8', '9']);
console.log("----------------------")
negativeOrPositiveN(['3', '-2', '0', '-1']);