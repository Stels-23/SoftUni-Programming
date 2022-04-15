function censoredWords(text, word) {
    let tokens = text.split(word);
    let result = tokens.join('*'.repeat(word.length))
    console.log(result);

}

/*function censoredWords(text, word) {
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);
} */

censoredWords('A small sentence with some words', 'small');
console.log('================');
censoredWords('Find the hidden word', 'hidden');