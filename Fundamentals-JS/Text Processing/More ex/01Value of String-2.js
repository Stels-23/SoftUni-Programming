function valueOfAStr(input) {
    let sum = 0;
    let text = input.shift().split('')
        .filter(x => x.charCodeAt() >= 65 && x.charCodeAt() <= 90 || x.charCodeAt() >= 97 && x.charCodeAt() <= 122)
    let command = input.shift().split('').join('');
    if (command === "UPPERCASE") {
        text = text.filter(x => x.charCodeAt() >= 65 && x.charCodeAt() <= 90); // трябва да се презапише!!!!
        for (let letter of text) {
            letter = letter.charCodeAt();
            sum += letter;
        }
    }
    if (command === 'LOWERCASE') {
        text = text.filter(x => x.charCodeAt() >= 97 && x.charCodeAt() <= 122); // трябва да се презапише!!!!
        for (let letter of text) {
            letter = letter.charCodeAt();
            sum += letter;
        }

    }
    console.log(`The total sum is: ${sum}`)
}




valueOfAStr(['AC/DC',
    'UPPERCASE'
]);
console.log('=========');
valueOfAStr(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE'
])