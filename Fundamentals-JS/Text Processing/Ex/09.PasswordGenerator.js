function passwordGenerator(input) {
    let array1 = input[0];
    let array2 = input[1];
    let word = input[2];
    let concatenated = array1.concat(array2);
    concatenated = concatenated.split('');
    //let result = [];
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let reversedPassword = '';
    word = word.toLowerCase();
    let vowelIndex = 0;
    for (let i = 0; i < concatenated.length; i++) {
        if (vowels.includes(concatenated[i])) {
            let indexOfChar = vowelIndex % word.length;
            vowelIndex++;
            let currChar = word.charAt(indexOfChar);
            reversedPassword += currChar.toUpperCase();
        } else {
            reversedPassword += concatenated[i];

        }
    }
    let result = reversedPassword.split('').reverse().join('')
    console.log(`Your generated password is ${result}`);

}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]);
console.log('=================');
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]);
console.log('=================');
passwordGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
]);