function matchPhoneNumber(input) {
    let pattern = /[+]359([ -])2\1\d{3}\1\d{4}\b/g // /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g //  // [+]359([\s-])2\1\d{3}\1\d{4}\b /шаблон
    let validPhoneNumbes = []
    let validNumber = null;
    while ((validNumber = pattern.exec(input)) !== null) {
        validPhoneNumbes.push(validNumber[0])
    }
    console.log(validPhoneNumbes.join(', '))
}
matchPhoneNumber("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")