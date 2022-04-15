function revealWords(word, sentences) {
    let letter = word.split(', ');
    //letter = letter.split('');
    for (let el of letter) {

        // let template = '*'.repeat(el.length);
        // sentences = sentences.replace(template, el)
        sentences = sentences.replace('*'.repeat(el.length), el)

    }
    console.log(sentences)


}
revealWords('great',
    'softuni is ***** place for learning new programming languages');
console.log('==============');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages')