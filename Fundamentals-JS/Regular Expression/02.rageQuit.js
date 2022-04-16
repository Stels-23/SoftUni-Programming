/*function rageQuit(input) {
    let pattern = /[A-za-z\d\&\@]/g;
    let match = pattern.exec(input);
    let uniqueSymbol = [];
    let result = [];
    let save = "";
    while (match !== null) {
        let currentEl = match[0];
        let countLetter = Number(currentEl)
        if (isNaN(countLetter)) {
            currentEl = currentEl.toUpperCase()
            result.push(currentEl);
            uniqueSymbol.push(currentEl);
        } else {
            if (countLetter >= 1 && countLetter <= 9) {

                let repeatEl = result.join('').repeat(countLetter);
                save += repeatEl
                result = []

            }
        }
        match = pattern.exec(input);

    }

    uniqueSymbol = uniqueSymbol.filter((item, index, array) => array.indexOf(item) === index);

    console.log(`Unique symbols used: ${uniqueSymbol.length}\n${save}`)


}*/
function rageQuit(input) {
    let symbol = input[0].split(/\d+/).filter((x) => x != '');
    let repeats = input[0].split(/\D+/).filter((x) => x != '');
    let result = '';
    for (let i = 0; i < symbol.length; i++) {
        result += symbol[i].toUpperCase().repeat(repeats[i])
    }
    let finalResult = [...new Set(result)].length
    console.log(`Unique symbols used: ${finalResult}\n${result}`)
}
rageQuit(['aSd2&5s@1']);
console.log('=============');
rageQuit(['a3'])
consoel.log('==================');
//rageQuit([`e - !btI17z = E: DMJ19U1Tvg VQ > 11 P "qCmo.-0YHYu~o%/%b.}a[=d15fz^" { 0 ^ /pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/ { D 'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]': \Iz .17 * W: \mwV `z-15g@hUYE{_$~}+X%*nytkW15`);