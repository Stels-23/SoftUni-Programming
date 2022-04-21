function paitingEggs(input) {
    let sizeOfEgg = input.shift();
    let colorOfEgg = input.shift();
    let batch = Number(input);
    let price = 0;
    switch (colorOfEgg) {
        case "Red":
            if (sizeOfEgg === "Large") {
                price = 16;
            } else if (sizeOfEgg === "Medium") {
                price = 13;
            } else if (sizeOfEgg === "Small") {
                price = 9;
            }
            break;
        case "Green":
            if (sizeOfEgg === "Large") {
                price = 12;
            } else if (sizeOfEgg === "Medium") {
                price = 9;
            } else if (sizeOfEgg === "Small") {
                price = 8;
            }

            break;
        case "Yellow":
            if (sizeOfEgg === "Large") {
                price = 9;
            } else if (sizeOfEgg === "Medium") {
                price = 7;
            } else if (sizeOfEgg === "Small") {
                price = 5;
            }

            break;
    }
    let totalPrice = price * batch;
    let costs = totalPrice * 0.35;
    let sumAfterCosts = totalPrice - costs;
    console.log(`${sumAfterCosts.toFixed(2)} leva.`)


}
paitingEggs(["Large",
    "Red",
    "7"
]);
console.log('==========');
paitingEggs(["Medium",
    "Green",
    "5"
]);
console.log('============');
paitingEggs(["Small",
    "Yellow",
    "3"
]);