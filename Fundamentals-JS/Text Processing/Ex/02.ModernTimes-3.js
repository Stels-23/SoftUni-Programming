function modernTimes(input) {
    let tokens = input.split(' ');
    let array = [];
    let currWord;
    for (let currentWord of tokens) {
        if (currentWord.includes('#') && currentWord.length > 1) {
            currWord = currentWord.substring(1)
            let separateWord = currentWord.substring(1).split('');

            for (let alphabet of separateWord) {
                let asciiCode = alphabet.charCodeAt(0);

                if ((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122)) {
                    array.push(alphabet + "")
                } else if (!(asciiCode >= 65 && asciiCode <= 90) && !(asciiCode >= 97 && asciiCode <= 122)) {
                    array.splice(alphabet.length - alphabet)
                    break;
                }
                let concat = '';
                for (let word of array) {
                    concat += word;

                    if (concat === currWord) {
                        console.log(concat);
                        array.splice(0, separateWord.length)
                    }
                }
            }

        }

    }


}
//modernTimes('Nowadays everyone uses # to tag a #special123 word in #socialMedia');
console.log('==========');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')