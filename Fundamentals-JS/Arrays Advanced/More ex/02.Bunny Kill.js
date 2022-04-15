function bunnyKill(arr) {
    let bombs = arr.pop().split(' ')    //премахва се от масива последния елемент с координатите на зайците с бомби
    let array = [];
 
    //създавам нов двумерен масив на който превръщам всички стойностти в числа ( за по-лесна обработка в последствие)
    for (let iterator of arr) {
        let currentRow = iterator.split(' ');
        array.push(currentRow.map(Number));
    }
 
    let leftForSnowball = 0;
    let totalDamage = 0;
 
 
 
    for (let i = 0; i < bombs.length; i++) {
        let arrRowIndex = Number(bombs[i].split(',')[0]);   //взимаме индекса за ред
        let arrColumnIndex = Number(bombs[i].split(',')[1]);    //взимаме индекса за колона
 
        let damage = array[arrRowIndex][arrColumnIndex];
        
        if (damage >0){
            totalDamage+=damage;
            leftForSnowball++
        }else{      //ако вече е умрял заека от бомбата на друг скипваме долните редове
            continue;
        }
        // тъй като знаем че трябва да обходим точен брой позиции завъртаме 3 х 3  цикъла с проверка съществуващ ли е индекса
        // ако да то му намаляме стойността 
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (array[arrRowIndex - 1 + i] != undefined) {    //този ред е задължителен иначе може да се стигне до невалиден израз array[-1][0]
                    if (array[arrRowIndex - 1 + i][arrColumnIndex - 1 + j] != undefined) {
                        array[arrRowIndex - 1 + i][arrColumnIndex - 1 + j] -= damage;
                    }
                }
            }
        }
 
    }
    //Цикъл за обхождане на броя останали зайци сле експлозията и сумиране на тяхните точки
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {   // тъй като два от входовете са не-равни матрици втория цикъл е по дължината от i
            if (array[i][j] > 0) {
                leftForSnowball++;
                totalDamage+=array[i][j];
            }
        }
    }
 
    console.log(totalDamage)
    console.log(leftForSnowball)
 
 
}
 
bunnyKill([ '5 10 15 20',
            '10 10 10 10',
            '10 15 10 10',
            '10 10 10 10',
            '2,2 0,1']
)
