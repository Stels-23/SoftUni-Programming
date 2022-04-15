function treasureFinder(input) {
    let code = input.shift().split(' ');

    for (let line of input) {
        let result = '';
        let index = 0;
        let treasure;
        let coordinates;
        if (line === 'find') {
            break;
        }
        line.split('').forEach((char) => {
            if (index === code.length) {
                index = 0;
            }
            char = char.charCodeAt() - code[index];
            result += String.fromCharCode(char);
            index++;
        });
        treasure = result.substring(result.indexOf('&') + 1, result.lastIndexOf('&'));
        coordinates = result.substring(result.indexOf('<') + 1, result.lastIndexOf('>'));
        console.log(`Found ${treasure} at ${coordinates}`);
    }
}
treasureFinder([`1 2 1 3`,
    `ikegfp'jpne)bv=41P83X@`,
    `ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA`,
    `find`
])