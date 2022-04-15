function demo(arr) {


    let keyNumbers = arr.shift().split(' ').map(Number);
    let length = keyNumbers.length;
    let index = 0;
    let el = arr[index];

    while (el !== 'find') {

        let splitEl = el.split('');
        let sliceOfNumbers = keyNumbers.slice(0);
        let treasureType = '';
        let coordinates = '';

        for (let i = 0; i < splitEl.length; i++) {

            let currEl = splitEl[i].charCodeAt();
            let num = sliceOfNumbers.shift();
            sliceOfNumbers.push(num);
            let output = String.fromCharCode(currEl - num);

            if (output == '&') {

                for (let j = i + 1; j < splitEl.length; j++) {

                    let element = splitEl[j].charCodeAt();
                    let currNum = sliceOfNumbers.shift();
                    sliceOfNumbers.push(currNum);
                    let result = String.fromCharCode(element - currNum);

                    if (result == '&') {
                        i = j;
                        break;
                    } else {
                        treasureType += result;
                    }


                }

            } else if (output == '<') {

                for (let l = i + 1; l < splitEl.length; l++) {

                    let letter = splitEl[l].charCodeAt();
                    let number = sliceOfNumbers.shift();
                    sliceOfNumbers.push(number);
                    let currCoordinates = String.fromCharCode(letter - number);

                    if (currCoordinates == '>') {
                        i = l;
                        break;
                    } else {
                        coordinates += currCoordinates;
                    }

                }
            }
        }

        console.log(`Found ${treasureType} at ${coordinates}`);

        index++;
        el = arr[index];
    }



}
demo([`1 2 1 3`,
    `ikegfp'jpne)bv=41P83X@`,
    `ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA`,
    `find`
]);
console.log('===============');
demo([`1 4 2 5 3 2 1`,
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    `tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC`,
    `'stj)>34W68Z@`,
    `find`
])