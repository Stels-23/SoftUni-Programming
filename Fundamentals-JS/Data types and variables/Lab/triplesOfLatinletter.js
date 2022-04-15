//1
/*function latinLetter(n) {
    //let num = Number(n);
    for (let i = 0; i < n; i++) {
        let letter = String.fromCharCode(97 + i);


        for (let j = 0; j < n; j++) {
            let letter1 = String.fromCharCode(97 + j);

            for (let k = 0; k < n; k++) {
                let letter2 = String.fromCharCode(97 + k);
                console.log(`${letter}${letter1}${letter2}`);
            }
        }

    }

}*/
//2
function latinLetter(n) {
    let result = ""
    for (let i = 0; i < n; i++) {
        let letter = String.fromCharCode(97 + i);


        for (let j = 0; j < n; j++) {
            let letter1 = String.fromCharCode(97 + j);

            for (let k = 0; k < n; k++) {
                let letter2 = String.fromCharCode(97 + k);
                result += `${letter}${letter1}${letter2}\n`

            }
        }

    }
    console.log(result);

}
latinLetter("3");
//latinLetter(2);