function wordsUppercase(input) {
    let pattern = /[\w]+/g;
    let word = pattern.exec(input);
    let result = [];
    while (word !== null) {
        let currentWord = word[0];
        //if (currentWord.length > 0) {
        let upperCaseWord = currentWord.toUpperCase();
        result.push(upperCaseWord)
        word = pattern.exec(input);


        //}
    }
    console.log(result.join(', '))
}
wordsUppercase('Hi, how are you?');
console.log('============')
wordsUppercase('hello');
console.log('=========');
wordsUppercase('Functions in JS can be nested, i.e. hold other functions')