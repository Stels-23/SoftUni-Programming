/*function bombN(arr, bomb) {
    let bombNum = bomb[0];
    let bombRadius = bomb[1];
    let indexOfBomb = arr.indexOf(bombNum); //нагласили сме го на индекс 3 да гърми бомбата
    while (indexOfBomb !== -1) {
        let startIndex = Math.max(0, indexOfBomb - bombRadius); //3-2=1, т.е от 1-я индекс да започва
        let explosenL = bombRadius * 2 + 1; //4*2+1
        arr.splice(startIndex, explosenL) //1,2,9
        indexOfBomb = arr.indexOf(bombNum)
    }
    let sum = arr.reduce((a, b) => a + b, 0) //ot 0-viq index da zapochne
    console.log(sum);
}

function bombN(arr, bomb) {
    let bombNum = bomb[0];
    let bombRadius = bomb[1];
    let indexOfBomb = arr.indexOf(bombNum); //нагласили сме го на индекс 3 да гърми бомбата
    while (indexOfBomb !== -1) {
        let startIndex = Math.max(0, indexOfBomb - bombRadius); //3-2=1, т.е от 1-я индекс да започва
        let explosenL = bombRadius * 2 + 1; //4*2+1 ===>+1 e chisloto, koeto trqbva da unishtojim
        arr.splice(startIndex, explosenL) //1,2,9
        indexOfBomb = arr.indexOf(bombNum)
    }
    let sum = 0; //ot 0-viq index da zapochne
    for (let number of arr) {
        sum += number;
    }

    console.log(sum);
}*/

function bombN(array, numbers) { //80 ot 100

    let bombNum = numbers[0];
    let bombPower = numbers[1];

    let bombIndex = array.indexOf(bombNum);
    for (let num of array) {
        if (num === bombNum) {
            let startExplIndex = Math.max(0, bombIndex - bombPower);
            let exposLenght = bombPower * 2 + 1;
            array.splice(startExplIndex, exposLenght);
            bombIndex = array.indexOf(bombNum);



        }



    }

    let sum = 0;
    for (let el of array) {
        sum += el;
    }
    console.log(sum);

}
bombN([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
console.log("------------");
bombN([1, 4, 4, 2, 8, 9, 1], [9, 3]);
console.log("-----------------");
bombN([1, 7, 7, 1, 2, 3], [7, 1]);
console.log("---------------");
bombN([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);