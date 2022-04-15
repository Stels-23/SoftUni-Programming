function solve(sentence) {
    let words = sentence.split(' ');
    for (const word of words) {
        if (word.startsWith('#') && word.length > 1) {
            asciiCode = word.charCodeAt(1);
            let isLetter = (asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)
            if (isLetter) {
                console.log(word.substring(1))
            }
        }

    }
}
solve('1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat]')