/*function valueOfAStr(input) {
    let text = input[0];
    let currentFind = input[1];
    let result = "";
    let sum = 0;
    let charCode = 0;
    switch (currentFind) {
        case 'LOWERCASE':
            for (let letter of text) {
                charCode = letter.charCodeAt();
                if (letter.toLowerCase() === letter) {
                    if (charCode >= 97 && charCode <= 122) {
                        result += letter;
                        sum += charCode;
                    }
                }
            }
            break;
        case 'UPPERCASE':
            for (let letter of text) {
                charCode = letter.charCodeAt();
                if (letter.toUpperCase() === letter) {
                    if (charCode >= 65 && charCode <= 90) {
                        result += letter;
                        sum += charCode;
                    }
                }
            }
            break;
    }

    console.log(`The total sum is: ${sum}`)

}*/
function valueOfAStr(input) {
    let text = input[0];
    let type = input[1];
    let sum = 0;
    for (let letter of text) {
        let asciiCode = letter.charCodeAt();
        if (type === 'UPPERCASE') {
            if ((letter.toUpperCase() === letter) && (asciiCode >= 65 && asciiCode <= 90)) {
                sum += asciiCode;
            }

        }

        if (type === 'LOWERCASE') {
            //if (type === 'UPPERCASE') {
            if ((letter.toLowerCase() === letter) && (asciiCode >= 97 && asciiCode <= 122)) {
                sum += asciiCode;
                // }
            }
        }
    }
    console.log(`The total sum is: ${sum}`)
}
valueOfAStr([
    'HelloFromMyAwesomePROGRAM',
    'LOWERCASE'
]);
console.log('=====================');
valueOfAStr(['AC/DC',
    'UPPERCASE'
])