function easterShop(input) {
    let startQuantitityEggsInShop = Number(input.shift());
    //let result = startQuantitityEggsInShop;
    // let index = 0;
    let command = 0;
    let soldEggs = 0;
    //while (command !== "Close") { //
    for (let i = 0; i <= input.length; i += 2) {
        command = input[i];
        let count = Number(input[i + 1])
        if (command === "Buy") {
            soldEggs += count;
            let eggNow = startQuantitityEggsInShop;
            startQuantitityEggsInShop -= count;
            if (startQuantitityEggsInShop < 0) {
                console.log(`Not enough eggs in store!\nYou can buy only ${Math.abs(eggNow)}.`);
                return;

            }
        }
        if (command === "Fill") {
            startQuantitityEggsInShop += count;
            // break
        }

        //index += 2;
        // command = input[index]
    }

    if (command === "Close") {
        console.log(`Store is closed!\n${soldEggs} eggs sold.`)
    }
}
easterShop(["13",
    "Buy",
    "8",
    "Fill",
    "3",
    "Buy",
    "10"
]);
console.log('============');
easterShop(["20",
    "Fill",
    "30",
    "Buy",
    "15",
    "Buy",
    "20",
    "Close"
]);
console.log('=============');
easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "8"])