function replaceRepeatingChars(letters) {
    let unique = "";
    for (let i = 0; i < letters.length; i++) {
        let currentChar = letters.charAt(i);
        let nextChar = letters.charAt(i + 1);
        if (currentChar !== nextChar) {
            unique += currentChar;
        }
    }
    console.log(unique)


}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
console.log('=============');
replaceRepeatingChars('qqqwerqwecccwd')