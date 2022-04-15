/*function solve(commands) {
    let arr = commands.shift().split(' ').map(Number);
    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case 'Add':
                add(firstNum);
                break;
            case 'Remove':
                remove(firstNum);
                break;
            case 'RemoveAt':
                removeAt(firstNum);
                break;
            case 'Insert':
                insert(firstNum, secondNum);
                break;
        }
    }
    function add(el) {
        arr.push(el);
    }
    function remove(num) {
        arr = arr.filter(el => el !== num);
    }
    function removeAt(index) {
        arr.splice(index, 1);
    }
    function insert(num, index) {
        arr.splice(index, 0, num);
    }
    console.log(arr.join(' '));
} */
/*
function arrManipulation(commands) {
    //Добавяне на {number}: добавяне на число към края  на масива
    //	Премахване на {number}: премахнете всички събития на определено число от масива

    //	RemoveAt {index}: премахва номера при даден индекс
    let arr = commands // изтрива първия ред
        .shift()
        .split(' ')
        .map(Number); //парват се елементите в числа
    //в arr се съхранява 1-ред елементи, а в commands се съхраняват само командите
    //	Вмъкване на {номер} {index}: вмъква число при даден индекс
    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');

        firstNum = Number(firstNum); //
        secondNum = Number(secondNum); //

        switch (command) {
            case "Add":
                add(firstNum); // функция
                break;
            case "Remove":
                remove(firstNum) //функция
                break;
            case "RemoveAt":
                removeAt(firstNum); //функция
                break;
            case "Insert":
                insert(firstNum, secondNum); //функция
                break;
        }
    }

    function add(el) {
        arr.push(el);
    }

    function remove(num) {
        arr = arr.filter(el => el !== num);
    }

    function removeAt(index) {
        arr.splice(index, 1);
    }

    function insert(num, index) {
        arr.splice(index, 0, num)
    }
    console.log(arr.join(' '));
}*/
function arrManipulation(commands) {
    let arr = commands
        .shift()
        .split(' ')
        .map(Number);
    for (let i = 0; i < commands.length; i++) { // въртим по броя на командите
        let [command, firstNum, secondNum] = commands[i].split(' '); // взимаме съответната команда, число и индекс. П.С. Първо бих взела само командата и само, когато тя е insert ще взимам secondNum(който реално е индекса)
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);


        switch (command) {
            case "Add":
                add(firstNum); // подаваме параметър
                break;
            case "Remove":
                remove(firstNum); // подаваме параметър
                break;
            case "RemoveAt":
                removeAt(firstNum); //подаваме параметър
                break;
            case "Insert":
                insert(firstNum, secondNum); // подаваме параметри
                break;
        }
    }

    function add(el) {
        arr.push(el)
    }

    function remove(num) {
        arr = arr.filter(el => el !== num);
    }

    function removeAt(index) {
        arr.splice(index, 1);
    }

    function insert(num, index) {
        arr.splice(index, 0, num);
    }
    console.log(arr.join(' '))
}


arrManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);

console.log("------------------------------");
arrManipulation(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'
])