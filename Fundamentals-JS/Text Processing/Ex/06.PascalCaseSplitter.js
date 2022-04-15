function passcalCaseSplitter(text) {
    let tokens = text.split("");
    let separateWords = '';
    for (let currentWord of tokens) {
        let ascciCode = currentWord.charCodeAt();
        if ((ascciCode >= 65 && ascciCode <= 90)) {
            separateWords += (` ${currentWord}`);
        } else {
            separateWords += currentWord;
        }

    }
    separateWords = separateWords.substring(1).split(' ').join(', ')
    console.log(separateWords)
}
passcalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('======================');
passcalCaseSplitter('HoldTheDoor');
console.log('===================');
passcalCaseSplitter('ThisIsSoAnnoyingToDo');