function serializeStr(string) {
    let separate = string[0];
    let letters = [];

    for (let i = 0; i < separate.length; i++) {
        if (!letters.includes(separate[i])) {
            letters.push(separate[i]);
        }
    }

    while (letters.length > 0) {
        let char = letters.shift()
        let includes = [];

        for (let i = 0; i < separate.length; i++) {
            if (char === separate[i]) {
                includes.push(i)
            }

        }
        console.log(`${char}:${includes.join('/')}`);
    }

}
serializeStr(["abababa"]);
console.log('=============');
serializeStr(["avjavamsdmcalsdm"])