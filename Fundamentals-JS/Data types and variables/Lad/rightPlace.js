/*function rightPlace(word, char, matched) {
    let res = "";
    //let result = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i] == "_") {
            res += char;
        } else {
            res += word[i];
        }
    }
    if (res == matched) {
        console.log("Matched")
    } else {
        console.log("Not Matched")

    }

}*/
function rightPlace(word, char, matched) {
    let result = word.replace("_", char);
    let output = result === matched ? "Matched" : "Not Matched";
    console.log(output);
}
rightPlace('Str_ng', 'i', 'String')
    //('Str_ng', 'I', 'Strong')