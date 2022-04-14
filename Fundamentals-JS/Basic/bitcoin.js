function bitcoinMining(minedGold) {
    let boughtBitcoin = 0;
    let days = 0;
    let money = 0;
    let firstDay = 0;
    const bitcoin = 11949.16;
    for (let i = 0; i < minedGold.length; i++) {
        days++;
        let gold = minedGold[i];
        if (days % 3 === 0) {
            gold -= gold * 0.30;
        }
        money += gold * 67.51;
        while (money >= 11949.16) {
            if (firstDay === 0) {
                firstDay = days;
            }
            money -= bitcoin;
            boughtBitcoin++;
        }

    }
    console.log(`Bought bitcoins: ${boughtBitcoin}`);
    if (boughtBitcoin >= 1) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    } //nqma nujda ot else, tai kato trqbva da minava prez vsqka ot proverkite
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}
bitcoinMining([50, 100]) //([3124.15, 504.212, 2511.124])
    //([100, 200, 300])