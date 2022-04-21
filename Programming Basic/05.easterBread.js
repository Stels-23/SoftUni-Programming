function easterBread(input) {
    let countEasterBread = Number(input.shift());
    let totalNeedSugar = 0;
    let totalFlour = 0;
    let largeQuantityFlour = 0;
    let largeQuantitySugar = 0;
    let onePackageOfSugarGr = 950.0;
    let onePackageOfFlourGr = 750.0;
    for (let i = 0; i < input.length; i += 2) {
        let sugar = Number(input[i]);
        let flour = Number(input[i + 1]);
        totalNeedSugar += sugar;
        if (isNaN(flour) === false) {
            totalFlour += flour;
        }
        if (sugar > largeQuantitySugar) {
            largeQuantitySugar = sugar;
        }
        if (flour > largeQuantityFlour) {
            largeQuantityFlour = flour;
        }
    }
    let countPackageSugar = Math.ceil(totalNeedSugar / onePackageOfSugarGr);
    let countPackageFlour = Math.ceil(totalFlour / onePackageOfFlourGr);
    console.log(`Sugar: ${countPackageSugar}`);
    console.log(`Flour: ${countPackageFlour}`);
    console.log(`Max used flour is ${largeQuantityFlour} grams, max used sugar is ${largeQuantitySugar} grams.`);
}
easterBread(["3",
    "400",
    "350",
    "250",
    "300",
    "450",
    "380"
])
console.log('===============');
easterBread(["4",
    "500",
    "350",
    "560",
    "430",
    "600",
    "345",
    "578",
    "543"
])