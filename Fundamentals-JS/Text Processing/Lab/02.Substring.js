function substring(word, startIndex, countElemnts) {
    let endIndex = countElemnts + startIndex
    let takeSliceOfWord = word.substring(startIndex, endIndex)
        //.substring(startIndex, countElemnts + startIndex)
    console.log(takeSliceOfWord)


}
substring('ASentence', 1, 8);
console.log('==============');
substring('SkipWord', 4, 7)