function palindroms(input) {
    let arrOfNumbers = input;
    let inputL = arrOfNumbers.length;
    let isPalindrom = (num) => {
        let startNum = num;
        let reversedNum = Number(num.toString().split('').reverse().join(''));
        if (startNum === reversedNum) {
            return 'true';
        } else {
            return 'false'
        }
    }
    for (let i = 0; i < inputL; i++) {
        let currentNumber = arrOfNumbers[i];
        console.log(isPalindrom(currentNumber)); //в палиндрома се проверява дали конкретния елемент съвпада наобратно

    }

}
palindroms([12, 323, 421, 121]);
console.log('----------')
palindroms([32, 2, 232, 1010]);

/*
function solve(password){
 
    let arr = password.split(``);
 
    if(lengthCheck(password) && twoDigitContain(password) && isOnlyLettersAndDigitsCheck(password)){
       console.log("Password is valid")
    }else if(!lengthCheck(password)){
        console.log("Password must be between 6 and 10 characters")
    }
 
    if(!isOnlyLettersAndDigitsCheck(password)){
        console.log("Password must consist only of letters and digits")
    }
 
   if(!twoDigitContain(password)){
       console.log("Password must have at least 2 digits")
   }
 
 
    function lengthCheck(array){
        if(array.length >= 6 && array.length <= 10){
            return true;
        }else{
            return false;
        }
    }
    function twoDigitContain(array){
 
        let length = array.length;
        let digitCounter = 0;
        for(let el of array){
            let currentString = el
            let currentNum = Number(el)
            if(currentNum == currentString){
                digitCounter++;
            }
 
        }
        if(digitCounter >= 2 && digitCounter < length){
            return digitCounter;
 
 
        }else{
           return false;
 
        }
    }
    function isOnlyLettersAndDigitsCheck(array){
        let length = array.length;
 
    let alphabet = ["A","a","B","b","C","c","D","d","E","e","F","f","G","g","H","h","I","i","J","j","K","k","L","l","M","m","N","n","O","o","P","p","Q","q","R","r","S","s","T","t","U","u","V","v","W","w","X","x","Y","y","Z","z"];
 
    let letterCounter = 0;
 
 
        for(let letter of array){
            if(alphabet.includes(letter)){
                letterCounter++;
            }
 
        }
        if(letterCounter > 0 && letterCounter + twoDigitContain(array) == length){
            return true;
 
        }else{
            return false;
        }
 
    }
 
}
*/