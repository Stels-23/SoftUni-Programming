function series(input) {
    let buget = Number(input[0]);
    let countSeries = Number(input[1]);
    let totalPriceFromSeries = 0;
    let priceOnSeria = 0;
    let discount = 0;
    for (let i = 2; i < input.length; i += 2) {
        let movieName = input[i];
        let priceForSeries = Number(input[i + 1]);

        if (movieName === "Thrones") {
            discount = 0.50;
            priceOnSeria = priceForSeries * discount;

        } else if (movieName === "Lucifer") {
            discount = 0.60;
            priceOnSeria = priceForSeries * discount;
        } else if (movieName === "Protector") {
            discount = 0.70;
            priceOnSeria = priceForSeries * discount;
        } else if (movieName === "TotalDrama") {
            discount = 0.80;
            priceOnSeria = priceForSeries * discount;
        } else if (movieName === "Area") {
            discount = 0.90;
            priceOnSeria = priceForSeries * discount;
        } else {
            priceOnSeria = priceForSeries
        }
        totalPriceFromSeries += priceOnSeria;


    }
    if (buget >= totalPriceFromSeries) {
        let leftMoney = buget - totalPriceFromSeries;
        console.log(`You bought all the series and left with ${leftMoney.toFixed(2)} lv.`)
    } else {
        let needMoney = totalPriceFromSeries - buget;
        console.log(`You need ${needMoney.toFixed(2)} lv. more to buy the series!`)
    }

}
series(["10",
    "3",
    "Thrones",
    "5",
    "Riverdale",
    "5",
    "Gotham",
    "2"
]);
console.log('========');
series(["25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"
]);