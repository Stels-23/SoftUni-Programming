/*function arrayManipolator(n, commands) {
    let firstN = 0;
    let secondN = 0;
    let numsToAdd = 0;
    let result = 0;
    let position = 0;
    let resultArr = [];
    for (let i of commands) {
        let token = i.split(' ')
        let command = token[0];
        //console.log(command);
        if (command === 'add') {
            firstN = Number(token[1]);
            secondN = Number(token[2]);
            n.splice(firstN, 0, secondN);
            //console.log(n)
        } else if (command === 'addMany') {
            firstN = Number(token[1]);
            token.splice(0, 2);
            numsToAdd = token.map(Number);
            n.splice(firstN, 0, ...numsToAdd);
        } else if (command === 'contains') {
            result = n.indexOf(token[1]);
            console.log(result)
        } else if (command === 'remove') {
            firstN = Number(token[1]);
            n.splice(firstN, 1);
        } else if (command === 'shift') {
            position = Number(token[1]);
            for (let j = 0; j < position; j++) {
                let firstNumber = n.shift();
                n.push(firstNumber)
            }
        } else if (command === 'sumPairs') {
            if (n.length % 2 !== 0) {
                n.push(0);
            }


            for (let k = 0; k < n.length - 1; k += 2) {
                let sum = n[k] + n[k + 1];
                resultArr.push(sum);
            }
            n = resultArr // prezapisvane
        } else if (command === 'print') {
            console.log(`[${n.join(' ')}]`)
        }
    }


}*/

/*function arrayManipolator(arr, commands) {
    let newArr = [];
    for (let el of commands) {
        let [command, index, element] = el.split(' ');
        switch (command) {
            case 'add':
                arr.splice(index, 0, +element);
                break;
            case 'addMany':
                let currentEl = 0;
                let removeFirst = el.split(' ');
                for (let i = removeFirst.length - 1; i >= 2; i--) {
                    currentEl = removeFirst[i];
                    arr.splice(index, 0, +currentEl);
                }
                break;
            case 'contains':
                // if (arr.indexOf(+index) !== -1) {
                //     console.log('0');
                // } else {
                //     console.log('-1');
                // }
                console.log(arr.indexOf(+index));
                break;
            case 'remove':
                arr.splice(index, 1);
                break;
            case 'shift':
                let position = +index;
                for (let i = 0; i < position; i++) {
                    let firstEl = arr.shift();
                    arr.push(firstEl);
                }
                break;
            case 'sumPairs':
                // if (arr.length % 2 === 0) {
                let els = arr.reduce(function(total, el, index) {
                    if (index % 2 === 0) {
                        total.push(+arr[index] + (+arr[index + 1] || 0));
                    }
                    return total;
                }, []);
                arr = els;
                // }
                break;
            case 'print':
                for (let el of arr) {
                    newArr.push(el);
                }
                break;
        }
    }
    // console.log(newArr);
    console.log('[ ' + newArr.join(', ') + ' ]');
}*/

function arrayManipolator(arr, commands) {

    for (let i = 0; i < commands.length; i++) {
        let splited = commands[i].split(' ');
        let command = splited[0];
        if (command === 'add') {
            add();
        } else if (command === 'addMany') {
            addMany();
        } else if (command === 'contains') {
            contains();
        } else if (command === 'remove') {
            remove();
        } else if (command === 'shift') {
            shift();
        } else if (command === 'sumPairs') {
            sumPairs();
        } else if (command === 'print') {
            print();
            break;
        }

        function add() {
            let index = parseInt(splited[1]);
            let element = parseInt(splited[2]);
            arr.splice(index, 0, element);
        }

        function addMany() {
            let index = parseInt(splited[1]);
            for (let j = splited.length - 1; j >= 2; j--) {
                let element = parseInt(splited[j]);
                arr.splice(index, 0, element);
            }
        }

        function contains() {
            let element = parseInt(splited[1]);
            console.log(arr.indexOf(element));
        }

        function remove() {
            let index = parseInt(splited[1]);
            arr.splice(index, 1);
        }

        function shift() {
            let position = parseInt(splited[1]);
            for (let a = 0; a < position; a++) {
                let first = arr.shift();
                arr.push(first);
            }
        }

        function sumPairs() {
            arr = arr.map((e, i, arr) => i < arr.length - 1 ? (arr[i] += arr[i + 1]) : arr[i] = arr[i]).filter((e, i) => i % 2 === 0);
        }

        function print() {
            console.log(`[ ${arr} ]`);
        }
    }
}

arrayManipolator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);