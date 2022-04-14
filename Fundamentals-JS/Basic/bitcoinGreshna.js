/*function bitcoinMining(input) {
    let bitcoinCounter = 0;
    let dayCounter = 0;
    let goldSum = 0;
    let sumLeva = 0;
    let firstDay = 0;

    for (index = 0; index < input.length; index++) {
        dayCounter++;
        let goldAmount = input[index];

        if (dayCounter === 3) {
            goldAmount *= 0.70;
        }

        goldSum += goldAmount;
        sumLeva += goldAmount * 67.51;


        while (sumLeva >= 11949.16) {
            if (firstDay === 0) {
                firstDay = dayCounter;
            }
            bitcoinCounter++;
            sumLeva -= 11949.16;

        }
    }
    console.log(`Bought bitcoins: ${bitcoinCounter}`);
    if (bitcoinCounter > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${sumLeva.toFixed(2)} lv.`)
}*/

function bitcoin(input) {
    let index = 0;
    let totalGold = 0;
    let bitcoinCount = 0;
    let gold = 0;
    let firstBitcoin = 0;
    //let firstDay = 0;
    //let isBought = false;

    for (let i = 0; i < input.length; i++) {
        let gramsPerDay = input[i];
        index++

        if (index % 3 === 0) {
            gramsPerDay -= gramsPerDay * 0.30;
        }

        gold = gramsPerDay * 67.51;
        totalGold += gold;


        while (totalGold >= 11949.16) {
            if (firstDay === 0) {
                firstDay = index;


            }
            totalGold -= 11949.16;
            bitcoinCount++;
        }
    }
    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (bitcoinCount >= 1) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`)
    }

    console.log(`Left money: ${totalGold.toFixed(2)} lv.`)
}
bitcoin([100, 200, 300])