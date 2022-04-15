function lettersChangeN(input) {
    let sequences = input.split(/\s+/);
    let sum = 0;
    //sequences.filter((el) => el.length > 1);
    let isLowerCase = (string) => /^[a-z]$/.test(string);

    let isUpperCase = (string) => /^[A-Z]$/.test(string);

    for (let el of sequences) {
        let result = 0;
        let firstChar = el.charAt(0); //взима 1-я елемент А
        let firstCharPosition = el.toLowerCase().charCodeAt(0) - 96; //смалява буквата и я проверява с кой номер е в asccii table, като същия номер се изважда с 96
        let lastChar = el.charAt(el.length - 1); // взима последния елемент b
        let lastCharPosition = el.toLowerCase().charCodeAt(el.length - 1) - 96; //проверя позицията на елемнта 
        let numberPart = Number(el.substring(1, el.length - 1)); //взима числото, което седи по средата

        if (isUpperCase(firstChar)) {
            result = numberPart / firstCharPosition;
            sum += result;
        }
        if (isLowerCase(firstChar)) {
            result = numberPart * firstCharPosition;
            sum += result;
        }
        if (isUpperCase(lastChar)) {
            sum -= lastCharPosition;
        }
        if (isLowerCase(lastChar)) {
            sum += lastCharPosition;
        }
    }
    console.log(sum.toFixed(2));
}

lettersChangeN('A12b s17G');
console.log('==========');
lettersChangeN('P34562Z q2576f   H456z');
console.log('==============');
lettersChangeN('a1A')