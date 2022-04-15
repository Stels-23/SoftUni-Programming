//1-ви вариянт
/*function solve(input) {
    let fieldSize = +(input[0]); // + е заместител на Number. Размера на полето
    let bugs = input[1].split(' ').map(el => +(el)); // декларира 2-я елемент от масива
    if (input[1] === '') {
        bugs = []; //масив, който ще съхранява движенията на калинките
    }
    let commands = input.slice(2); // показва в масив елементите, разположени на 3-та позиция
    let field = []; // създаваме нов масив на полето


    for (let i = 0; i < fieldSize; i++) {
        bugs.indexOf(i) !== -1 ? field.push(1) : field.push(0); //[1, 1, 1]
    }

    for (let c in commands) { //обхождане на елементите на 3-та позиция
        let temp = commands[c].split(' ');
        let position = +(temp[0]);
        if (commands[c] === '' || position < 0 || position >= fieldSize || field[position] !== 1) {
            continue;
        }
        let right = 'right' === temp[1];
        let step = +(temp[2]);
        field[position] = 0; //[0, 1, 1]

        while (position >= 0 && position < fieldSize) { //диапазона на позицията до размера на полето
            right ? position += step : position -= step;

            if (field[position] === 0) {
                field[position] = 1;
                break;
            }
        }
    }
    console.log(field.join(' '));
}

function solve(arr) {
    let field = Array(arr[0]).fill(0); //поле
    let ladybugs = arr[1].split(' '); //калинки ['0', '1']
    for (let i = 0; i < ladybugs.length; i++) {
        if (field[ladybugs[i]] === 0) {
            field[ladybugs[i]] = 1;
        }
    }
    for (let i = 2; i < arr.length; i++) {
        let command = arr[i].split(' '); //['0', 'right', '1']
        let direction = command[1]; //'right'
        let spot = +command[0]; //0, 2
        let moves = +command[2]; //1, 1
        switch (direction) {
            case 'right':
                if (field[spot] === 1) { // проверка на всеки елемент от масива field, дали има 1
                    field[spot] = 0; //замества се 1 с 0
                    while (field[spot + moves] !== 0 && spot + moves < field.length) {
                        moves += moves;
                    }
                    if (field[spot + moves] === 0) {
                        field[spot + moves] = 1;
                    }
                }
                break;
            case 'left':
                if (field[spot] === 1) {
                    field[spot] = 0;
                    while (field[spot - moves] !== 0 && spot - moves >= 0) {
                        moves += moves;
                    }
                    if (field[spot - moves] === 0) {
                        field[spot - moves] = 1;
                    }
                }
                break;
        }
    }
    return field.join(' ');
}*/
function ladyBugs(arr) {
    let sizeOfField = arr[0];
    let ladybugsPositions = arr[1].split(' ').map(Number); // броя позиции на калинката
    let ladybugsArray = [];

    // fill the array with 0
    for (let i = 0; i < sizeOfField; i++) {
        ladybugsArray.push(0); // добавя 0 в масива
    }
    // mark starting ladybugs index
    for (let i = 0; i < sizeOfField; i++) {
        let ladybugIndex = ladybugsPositions[i];
        if (ladybugIndex >= 0 && ladybugIndex < sizeOfField) {
            ladybugsArray[ladybugIndex] = 1;
        }
    }

    for (let i = 2; i < arr.length; i++) {
        // JS destructuring
        let [ladybugIndex, command, jumpLength] = arr[i].split(' '); // ladybugIndex заема стойност 3; command-left; jumpLength-2
        ladybugIndex = +ladybugIndex;
        jumpLength = +jumpLength; //pars-ваме от стринг в число

        if (ladybugsArray[ladybugIndex] !== 1 || ladybugIndex < 0 || ladybugIndex >= ladybugsArray.length) {
            continue;
        }
        // check for negative steps
        if (jumpLength < 0) {
            jumpLength = Math.abs(jumpLength);
            if (command === 'right') {
                command = 'left';
            } else if (command === 'left') {
                command = 'right';
            }
        }
        // Free Position
        ladybugsArray[ladybugIndex] = 0; //зануляваме масива
        if (command === 'right') {
            // Ladybug jumps one time
            let newPosition = ladybugIndex + jumpLength;
            // Jump another time if there is a lady bug
            if (ladybugsArray[newPosition] === 1) {
                newPosition = newPosition + jumpLength;
            }
            if (newPosition <= ladybugsArray.length) {
                ladybugsArray[newPosition] = 1;
            }

        } else {
            // Lady bug jumps to the left
            let newPosition = ladybugIndex - jumpLength;
            // Jump another time if there is a lady bug
            if (ladybugsArray[newPosition] === 1) {
                newPosition = newPosition - jumpLength;
            }
            if (newPosition >= 0) {
                ladybugsArray[newPosition] = 1;
            }
        }

    }

    console.log(ladybugsArray.join(' '));

}
ladyBugs([5, '3',
    '3 left 2',
    '1 left -2'
]);
/*
solve([3, '0 1',
    '0 right 1',
    '2 right 1'
]);

solve([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1'
]);

solve([5, '3',
    '3 left 2',
    '1 left -2'
]);*/