function wordsUppercase(input) {
    let result = input.toUpperCase()
        .split(/[\W]/g)
        .filter(word => word.length > 0)
        .join(', ');
    console.log(result);



}
wordsUppercase('Hi, how are you?');
console.log('============')
wordsUppercase('hello');
console.log('=========');
wordsUppercase('Functions in JS can be nested, i.e. hold other functions')