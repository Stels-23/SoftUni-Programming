function occurrences(text, word) {
    let tokens = text.split(" ");
    let count = 0;

    for (let w of tokens) {
        if (w === word) {
            count++
        }
    }
    console.log(count)


}
occurrences('This is a word and it also is a sentence', 'is');
console.log('=============');
occurrences('softuni is great place for learning new programming languages', 'softuni')