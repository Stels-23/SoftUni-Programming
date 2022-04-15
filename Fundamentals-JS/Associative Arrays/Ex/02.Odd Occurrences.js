/*function oddOccurance(input) {
    let wordsSeparate = input.split(" "); // превръщаме стринга в масив
    let wordsInObj = {};
    for (let word of wordsSeparate) {
        word = word.toLocaleLowerCase(); //презаписване на конкретната дума
        //console.log(wordsSeparate)
        if (wordsInObj.hasOwnProperty(word)) {
            wordsInObj[word]++;
        } else {
            wordsInObj[word] = 1;
        }
    }
    let filtered = Object.entries(wordsInObj).filter(([el, count]) => {
        if (count % 2 === 1) {
            return true;
        } else {
            return false;
        }
    });

    console.log(filtered.map(entry => entry[0]).join(" "));


}*/
// опростен код
function oddOccurance(input) {
    let wordsSeparate = input.split(" "); // превръщаме стринга в масив
    let wordsInObj = {};
    let output = [];
    for (let word of wordsSeparate) {
        word = word.toLocaleLowerCase(); //презаписване на конкретната дума
        //console.log(wordsSeparate)
        if (wordsInObj.hasOwnProperty(word)) {
            wordsInObj[word]++;
        } else {
            wordsInObj[word] = 1;
        }
    }

    /*for (let word in wordsInObj) {
        if (wordsInObj[word] % 2 === 1) {
            output.push(word);
        }

    }
    console.log(output)*/

    let filtered = Object.entries(wordsInObj)
        .filter(([el, count]) => count % 2 === 1)
        .map(entry => entry[0])
        .join(" ");






    console.log(filtered);

}

oddOccurance('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log("==========");
oddOccurance('Cake IS SWEET is Soft CAKE sweet Food')