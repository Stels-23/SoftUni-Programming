function wordsUppercase(input) {
    let result = input.toUpperCase()
        .match(/[\w]+/g)
        .join(', ');
    console.log(result)

}
wordsUppercase('Hi, how are you?');
console.log('============')
wordsUppercase('hello');
console.log('=========');
wordsUppercase('Functions in JS can be nested, i.e. hold other functions')