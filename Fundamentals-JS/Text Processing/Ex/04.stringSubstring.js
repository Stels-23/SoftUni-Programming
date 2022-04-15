function stringSubstring(currentWord, text) {
    let tokens = text.split(" ");

    for (let currWord of tokens) {

        if (currWord.toLowerCase() === currentWord.toLowerCase()) {
            console.log(currentWord)
            return;
        }
    }
    console.log(`${currentWord} not found!`)
    return;



}

stringSubstring('javascript',
    'JavaScript is the best programming language');
console.log('============');
stringSubstring('python',
    'JavaScript is the best programming language');