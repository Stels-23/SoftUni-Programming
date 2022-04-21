function easterGuests(input) {
    let count = input.map(Number);
    let countGuests = count[0];
    let buget = count[1];
    let priceEasterBread = 4;
    let priceEgg = 0.45;
    let countEasterBreadForGuestsNeeded = Math.ceil(countGuests / 3);
    let countEggsForGuestsNeeded = countGuests * 2;
    let allPriceForEasterBreads = priceEasterBread * countEasterBreadForGuestsNeeded;
    let AllPriceForEggs = countEggsForGuestsNeeded * priceEgg;
    let totalPrice = allPriceForEasterBreads + AllPriceForEggs;
    if (totalPrice <= buget) {
        let leftMoney = buget - totalPrice;
        console.log(`Lyubo bought ${countEasterBreadForGuestsNeeded} Easter bread and ${countEggsForGuestsNeeded} eggs.`)
        console.log(`He has ${leftMoney.toFixed(2)} lv. left.`);
    } else {
        let needMoney = totalPrice - buget;
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${needMoney.toFixed(2)} lv. more.`)

    }

}
easterGuests(["10", "35"]);
console.log('================');
easterGuests(["9", "12"]);