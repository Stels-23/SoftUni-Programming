function easterLunch(input) {
    let priceEasterBread = 3.20;
    let priceEgs = 4.35;
    let priceForCoockiesOnKG = 5.40;
    let priceColorForEgsForEgs = 0.15;
    let countProducts = input.map(Number);
    let countEasterBread = countProducts[0];
    let countEgs = countProducts[1];
    let coockiesKG = countProducts[2];
    let totalPriceForEasterBread = countEasterBread * priceEasterBread;
    let totalPriceForForEgs = countEgs * priceEgs;
    let totalPriceForCookies = coockiesKG * priceForCoockiesOnKG;
    let totalPriceForColor = 12 * countEgs * priceColorForEgsForEgs
    let digits = totalPriceForEasterBread + totalPriceForForEgs + totalPriceForCookies + totalPriceForColor;
    console.log(digits.toFixed(2))

}
easterLunch(["3",
    "2",
    "3"
]);
console.log('=========');
easterLunch(["4",
    "4",
    "3"
]);
console.log('============');
easterLunch(["2",
    "3",
    "2"
])