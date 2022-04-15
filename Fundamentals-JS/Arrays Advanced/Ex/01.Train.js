//wrong variaty
function train(commands) {
    let arr = commands
        .shift()
        .split(' ')
        .map(Number);
    let maxCapacity = Number(commands[0]);
    let sumaryN = 0;
    for (let i = 0; i < commands.length; i++) { // въртим по броя на командите
        let [command, firstNum] = commands[i].split(' '); // взимаме съответната команда, число и индекс. П.С. Първо бих взела само командата и само, когато тя е insert ще взимам secondNum(който реално е индекса)

        //firstNum = Number(firstNum);
        //secondNum = Number(secondNum);

        if (arr[0] + Number(command) <= maxCapacity) {
            arr[0] += Number(command)
            arr.unshift()
        }


        command = command.toString()
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
            default:
                command = Number(command);

        }


        //secondNum += Number(secondNum);

    }

    function add(el) {
        arr.push(el)
    }

    function remove(num) {
        arr.includes(el, el1 => el == el1);

    }

    function removeAt(index) {
        arr.splice(index, 1);
    }

    function insert(num, index) {
        arr.splice(index, 0, num);
    }
    console.log(arr.join(' ')) //В края отпечатайте крайното състояние на влака (всички вагони , разделени с пространство).
} //Всяко число вътре в низа представлява броя на пътниците, които в момента са във вагон. 
train(['32 54 21 12 4 0 23', //низ, съдържащ вагони (числа). 
    '75', //Вторият елемент в масива ще бъде максималният капацитет на всеки вагон (единичен номер).
    'Add 10', //	Добавяне на {пътници} – добавете вагон до края с дадения брой пътници
    'Add 0',
    '30', //{пътници}  - намери съществуващ вагон, който да побере всички пътници (започвайки от първия вагон
    '10',
    '75'
]); //72 54 21 12 4 75 23 10 0
console.log("---------------------------")
train(['0 0 0 10 2 4',
    '10',
    'Add 10', //Добавяне на {пътници} – добавете вагон до края с дадения брой пътници
    '10',
    '10',
    '10',
    '8',
    '6'
]); //10 10 10 10 10 10 10