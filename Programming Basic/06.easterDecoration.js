function easterDecoration(input) {
    let basketForEggs = 1.50;
    let easterWreath = 3.80;
    let chocolateRabbit = 7.00;
    let countClinetsInShop = Number(input.shift());
    let countProducts = 0;
    let totalOrder = 0;
    let average = 0;
    let products = input;

    for (let product of products) {
        switch (product) {
            case "Finish":
                if (countProducts % 2 === 0) {
                    let discount = 0.80;
                    totalOrder = totalOrder * discount;

                }
                console.log(`You purchased ${countProducts} items for ${totalOrder.toFixed(2)} leva.`)
                average += totalOrder;
                totalOrder = 0;
                //countClinetsInShop--;
                countProducts = 0;
                break;
            case "basket":
                countProducts++;
                totalOrder += basketForEggs;
                break;
            case "wreath":
                countProducts++;
                totalOrder += easterWreath;
                break;
            case "chocolate bunny":
                countProducts++;
                totalOrder += chocolateRabbit;
                break;
        }

    }
    average /= countClinetsInShop;
    console.log(`Average bill per client is: ${average.toFixed(2)} leva.`)

}
easterDecoration(["2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish"
]);
console.log('=================');
easterDecoration(["1",
    "basket",
    "wreath",
    "chocolate bunny",
    "wreath",
    "basket",
    "chocolate bunny",
    "Finish"
]);