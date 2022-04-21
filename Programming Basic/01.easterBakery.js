function easterBakery(input) {
    let products = input.map(Number);
    let priceFlourForKG = products[0]; //1.	Цена на брашното за един килограм – реално число в интервала [0.00 … 10000.00]
    let flourKG = products[1]; // 2.	Килограми на брашното – реално число в интервала [0.00 … 10000.00]
    let sugarKG = products[2]; //3.	Килограми на захарта – реално число в интервала [0.00 … 10000.00]
    let countShellWithEgs = products[3]; // 4.	Брой кори с яйца – цяло число в интервала [0 … 10000]
    let countPackageYeast = products[4]; //5.	Пакети мая  – цяло число в интервала [0 … 10000]
    let priceForSugarForKG = priceFlourForKG * (1 - 0.25);
    let priceEgsForShell = priceFlourForKG * (1 + 0.10);
    let priceForPackageYeast = priceForSugarForKG * (1 - 0.80);
    let priceForFlour = flourKG * priceFlourForKG;
    let priceForSugar = priceForSugarForKG * sugarKG;
    let priceForEgs = priceEgsForShell * countShellWithEgs;
    let priceForYeast = priceForPackageYeast * countPackageYeast;
    let totalPrice = priceForFlour + priceForSugar + priceForEgs + priceForYeast;
    console.log(totalPrice.toFixed(2));

}
easterBakery(["50",
    "10",
    "3.5",
    "6",
    "1"
]);
console.log('===========');
easterBakery(["63.44",
    "3.57",
    "6.35",
    "8",
    "2"
])