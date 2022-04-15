function passcalCaseSplitter(text) {
    let words = [];
    let currWord = text[0]; // в тази променлива ще се запазва първата буква
    for (let i = 1; i < text.length; i++) {
        if (text[i].toUpperCase() !== text[i]) {
            currWord = currWord.concat(text[i]);
        } else {
            words.push(currWord);
            currWord = text[i];

        }


    }
    words.push(currWord) // ще се добави последната дума

    console.log(words.join(", "))
}
passcalCaseSplitter('HoldTheDoor');
console.log('=========');
passcalCaseSplitter('ThisIsSoAnnoyingToDo');