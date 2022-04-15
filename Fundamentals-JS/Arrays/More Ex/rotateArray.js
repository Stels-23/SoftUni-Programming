/*
function rotateArray(list) {
    let rotation = Number(list[list.length-1])
  //  console.log(rotation);
    list.splice(list.length-1,1)
   // console.log(list);
    let nRotations = rotation % list.length;
   // console.log(nRotations);
 
    for (let i = 0; i < nRotations; i++) {
        let lastElement = list[list.length-1];
        list.splice(0,0,lastElement);
        list.splice(list.length-1,1);
    }
    console.log(list.join(' '));
}


function rotateArray(arr) {
    let lastIndex = arr.length;
    let firstElement = arr[0];
    let rotationLastL = Number(arr[arr.length - 1]);
    let newArr = []; // arr.pop(lastEl)

    for (let j = rotationLastL; j >= 0; j--) { // копира от 2-я елемент, като изтрива първия
        newArr.push(arr[j], arr[j + 1])
        if (j === 1 || j === 0) {
            newArr.pop(arr[j], arr[j + 1]);
             firstElement = rotationLastL;


        }
    }
    // lastEl = firstElement
    //arr.push(lastEl)


    console.log(newArr.join(" "));
}

function rotateArray(array) {
    let rotation = Number(array[array.length - 1])
    let newArr = []
    for (let i = 0; i < array.length - 1; i++) { //цикълът проверява всички елемнти, без последния
        newArr.push(array[i]) //в новия масив премахваме последния елемент['1', '2', '3', '4']
    }
    for (let i = 0; i < rotation; i++) { // броят завъртания е последният елемент от масива
        let lastEl = newArr[newArr.length - 1] // съхранява последния елемент
        for (let j = newArr.length - 1; j >= 0; j--) {
            newArr[j] = newArr[j - 1];
        }
        newArr[0] = lastEl //добавя елемента в масива
    }
    console.log(newArr.join(" "))
}*/
function rotateArray(arr) {
    let rotations = arr.pop(); // взима последния елемент

    for (let i = 0; i < rotations; i++) {
        let last = arr.pop(); //взима последния елемент
        arr.unshift(last); //слага го на първа позиция
    }
    console.log(arr.join(" "));
}


rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])