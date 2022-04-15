function passwordValidator(password) {
    //правим ф-я, в която да се провери дължината на елемента дали е в диапазона между 6 и 10 символа
    function isLenghtEnough(stringPassword) { //The length should be 6 - 10 characters (inclusive)
        return stringPassword.length >= 6 && stringPassword.length <= 10;
    }

    function isOnlyLettersAndDigits(stringPassword) {
        // 'hello' => 'h' 'e' ...... etc, взима всеки елемент от инпута
        for (let currCharIndex of stringPassword) {
            let currChar = currCharIndex.charCodeAt(0);
            if (!(currChar >= 48 && currChar <= 57) &&
                !(currChar >= 65 && currChar <= 90) &&
                !(currChar >= 97 && currChar <= 122)
            ) {
                return false;
            }
        } //It should consist only of letters and digits
        return true;
    }

    function isHavingAtleastTwoDigits(stringPassword) {
        let count = 0;
        for (let charIndex of stringPassword) {
            let currChar = charIndex.charCodeAt(0);
            //It should have at least 2 digits 

            if (currChar >= 48 && currChar <= 57) {
                count++;
            }
        }
        return count >= 2 ? true : false;
    }
    let isLenghtValid = isLenghtEnough(password);
    let isLettersAndDigitsOnly = isOnlyLettersAndDigits(password);
    let isContainingAtleastTwoDigits = isHavingAtleastTwoDigits(password);
    if (isLenghtValid && isLettersAndDigitsOnly && isContainingAtleastTwoDigits) {
        //If a password is valid print: "Password is valid".
        console.log("Password is valid");
    }
    //If it is NOT valid, for every unfulfilled rule print a message:
    if (!isLenghtValid) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!isLettersAndDigitsOnly) {
        console.log("Password must consist only of letters and digits");
    }
    if (!isContainingAtleastTwoDigits) {
        console.log("Password must have at least 2 digits");
    }
}

passwordValidator("Pa$s$s");
console.log("---------------");
passwordValidator('logIn');
console.log("----------------")
passwordValidator('MyPass123')