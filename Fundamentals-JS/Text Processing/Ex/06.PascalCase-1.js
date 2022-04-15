function PascalCaseSplitter(word) {
    let wordRe = /($[a-z])|[A-Z][^A-Z]+/g;
    return word.match(wordRe).join(", ");
} //Не е много надеждна програмаат, дава 60 от 100 в judge
console.log(PascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan'));