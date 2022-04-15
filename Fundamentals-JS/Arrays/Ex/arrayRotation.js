/*function arrayRotation(arr, rotation) {
    for (let i = 0; i < rotation; i++) {
        //изтриване и запазване на стойността отзад
        let currNum = arr.shift(); //.shift()-премахва първия елемент
        arr.push(currNum);//push-добавя елемента на крайна позиция

    }
    console.log(arr.join(" "));

}*/
function arrayRotation(arr, rotation) {
    for (let i = 0; i < rotation; i++) {
        let firstElement = arr[0];
        for (let j = 0; j < arr.length; j++) { // копира от 2-я елемент, като изтрива първия
            arr[j] = arr[j + 1];

        }
        let lastIndex = arr.length - 1;
        arr[lastIndex] = firstElement
    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);