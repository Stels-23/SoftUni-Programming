/*function charRange(charOne, charSecond) {
    let startChar = Math.min(charOne.charCodeAt(0), charSecond.charCodeAt(0)); // на нулев индекс е, защото се намира елемента
    let endChar = Math.max(charOne.charCodeAt(0), charSecond.charCodeAt(0));
    let arr = [];
    for (let i = startChar + 1; i < endChar; i++) {
        arr.push(String.fromCharCode(i));// подаваме числа и метода го репрезентира като символи
    }
    console.log(arr.join(" "))

}*/
function charRange(first, second) {
    let firstSymbolAsNumber = first.charCodeAt(0);
    let secondSymbolAsNumber = second.charCodeAt(0);
    let smallerNumber = Math.min(firstSymbolAsNumber, secondSymbolAsNumber);
    let biggerNumber = Math.max(firstSymbolAsNumber, secondSymbolAsNumber);
    let arr = [];
    for (let i = smallerNumber + 1; i < biggerNumber; i++) {

        let symbolRepresentation = String.fromCharCode(i); // числото се превръща в символ от ASCII таблицата
        arr.push(symbolRepresentation)
    }
    console.log(arr.join(" "));
}
charRange('a', 'd');
charRange('#', ':');
charRange('C', '#');