/*function amazingNumber(n) {
    let result = 0;
    let numAsString = String(n);
    let special = "False";
    for (let i = 0; i < numAsString.length; i++) {
        result += Number(numAsString[i]);
    }
    let resultAsString = String(result);

   for (let i = 0; i < resultAsString.length; i++) {
        if (resultAsString[i] == "9") {
            special = "True";
        }
    }
    console.log(`${n} Amazing? ${special}`);
// в този код не може само с 1-цикъл, тъй като Джудж не го приема за вярна задача, независимо, че тук си работи
}*/
function amazingNumber(n) {
    let numAsString = n.toString(); // String(n) е едно и също
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);

    }
    let result = sum.toString().includes("9");
    console.log(result ?
        `${n} Amazing? True` : `${n} Amazing? False`)
}
amazingNumber(4212) //(1233);
