function lowestPricesInCities(input) {
    // input => {townName} | {productName} | {productPrice}
    // output => {productName} -> {productLowestPrice} ({townName})
    let result = {}
    for (let tokens of input) {
        let [townName, productName, productPrice] = tokens.split(' | ');
        productPrice = Number(productPrice)
        if (!result.hasOwnProperty(productName)) {
            result[productName] = { townName, productPrice };

        } else {
            if (productPrice <= result[productName].productPrice) {
                result[productName] = { townName, productPrice }
            }
            // result[productName] = `${Number(productPrice)} (${townName})`;
        }
    }
    for (let product of Object.keys(result)) {
        console.log(`${product} -> ${result[product].productPrice} (${result[product].townName})`)
    }

}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);
lowestPricesInCities(['Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'
])