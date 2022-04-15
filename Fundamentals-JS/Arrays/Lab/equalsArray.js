/*function equalsArray(arr1, arr2) {
    let sumary = 0;
    let isEqualArray = true;
    let index = 0;// трябва да се добави променлива за индекса, тъй като дефинираната променлива извън цикъла не се визуализира
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            isEqualArray = false;
            index = i;
        }
        sumary += Number(arr1[i])
    }
    if (isEqualArray) {
        console.log(`Arrays are identical. Sum: ${sumary}`);

    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);

    }

}*/


function equalsArray(arr1, arr2) {
    let sum = 0;
    let dif = 0;
    let arrDif = false;
    for (let i = 0; i <= arr1.length - 1; i++) {
        if (arr1[i] === arr2[i]) {
            sum += Number(arr1[i]);
        } else {
            dif = i;
            console.log(`Arrays are not identical. Found difference at ${dif} index`);
            arrDif = true;
            break; // може и без оператора 
        }
    }
    if (!arrDif) { // (arrDif === false)
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
/*
function equalsArray(arr1, arr2) {
    let sum = 0;
    for (let i in arr1) {
        let firstEl = Number(arr1[i]);
        let secondEl = Number(arr2[i]);
        if (firstEl !== secondEl) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
        sum += firstEl
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}
*/
function equalsArray(arr1, arr2) {
    let sum = 0;
    let index = 0;

    let areIdentical = true;
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] != arr2[i]) {
            areIdentical = false;
            index = i;
            break; // рябва оператор break, за да може системата в judge  да приеме задачата
        }

        sum = sum + Number(arr1[i]);
    }
    if (areIdentical == true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}
equalsArray(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalsArray(['10', '20', '30'], ['10', '20', '30']);
equalsArray(['1'], ['10']);