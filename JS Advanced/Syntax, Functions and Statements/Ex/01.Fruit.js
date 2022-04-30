function fruit(currentFruit, weightInGr, priceForKG) {
    let needMoney = weightInGr * priceForKG / 1000;
    let weightInKG = weightInGr / 1000;

    console.log(`I need $${needMoney.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${currentFruit}.`)

}
fruit('orange', 2500, 1.80);
console.log('=============')
fruit('apple', 1563, 2.35);