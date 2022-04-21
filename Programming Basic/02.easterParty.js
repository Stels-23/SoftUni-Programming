function easterParty(input) {
    let elements = input.map(Number);
    let countGuests = elements[0];
    let priceForCovertForGuest = elements[1];
    let buget = elements[2];
    let discount = 0;
    let covertForGuest = 0;

    if (countGuests >= 10 && countGuests <= 15) {
        discount = 0.85;
        covertForGuest = priceForCovertForGuest * discount;
    } else if (countGuests >= 15 && countGuests <= 20) {
        discount = 0.80;
        covertForGuest = priceForCovertForGuest * discount;
    } else if (countGuests > 20) {
        discount = 0.75;
        covertForGuest = priceForCovertForGuest * discount;
    } else if (countGuests < 10) {
        covertForGuest = priceForCovertForGuest
    }
    let priceForCake = buget * 0.10;
    let totalSumForParty = countGuests * covertForGuest + priceForCake;
    if (totalSumForParty >= buget) {
        let neededMoney = totalSumForParty - buget;
        console.log(`No party! ${neededMoney.toFixed(2)} leva needed.`);

    } else {
        let remainingMoney = buget - totalSumForParty;
        console.log(`It is party time! ${remainingMoney.toFixed(2)} leva left.`);
    }


}
easterParty(["18",
    "30",
    "450"
]);

console.log('=============');
easterParty(["8",
    "25",
    "340"
]);
console.log('================');
easterParty(["24",
    "35",
    "550"
]);