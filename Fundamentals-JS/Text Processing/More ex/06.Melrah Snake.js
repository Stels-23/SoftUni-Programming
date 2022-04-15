function melrahSnake(input) {
    let text = input[0].split("");
    //let separateText = input[0];
    let currentWord = input[1].split('');
    let firstLetter = text[0].charCodeAt()
    let result = [];
    let checkRemoveEl = [];
    let otherEl = '';
    let currEl = '';
    while (text.length > 0) {
        for (let letter = 0; letter < currentWord.length; letter++) {
            if (checkRemoveEl.length === currentWord.length && firstLetter <= 35) {
                for (let j = 0; j < checkRemoveEl.length; j++) {
                    currEl = text.shift()
                    let currentL = checkRemoveEl[j];
                    if (currEl === currentL || currentWord.includes(currEl)) {

                        continue;

                    } else {
                        result.push(currEl);
                        //continue;

                    }
                }
                continue;
            }
            currEl = text.shift()
            otherEl = currentWord[letter];
            if (currEl === otherEl) {

                checkRemoveEl.push(otherEl);
                if (checkRemoveEl.length === 1) {
                    console.log('No shake.');
                }

                continue;
            }
            if (currEl !== otherEl) {
                result.push(currEl);

            }
            if ((currEl.length >= 1 && currEl.length <= 2) && (checkRemoveEl.length === 0)) {
                console.log('Shaked it.');



            }
            break;


        }

    }






    console.log(result.join(''))

}
melrahSnake(['astalavista baby',
    'sta'
]);

console.log('============');
melrahSnake(['##mtm!!mm.mm*mtm.#',
    'mtm'
]);