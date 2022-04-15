function asciiiSumator(input) {
    let char1 = input[0].charCodeAt();
    let char2 = input[1].charCodeAt();
    let text = input[2];
    let result = 0;
    for (let char of text) {
        let convertChar = char.charCodeAt();
        if (char1 > char2) {
            if (convertChar > char2 && convertChar < char1) {
                result += convertChar;
            }
        } else if (convertChar > char1 && convertChar < char2) {
            result += convertChar;
        }
    }

    console.log(result);

}
asciiiSumator(['.',
    '@',
    'dsg12gr5653feee5'
]);
console.log('=============');
asciiiSumator(['?',
    'E',
    '@ABCEF'
]);
console.log('=============');
asciiiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$'
])