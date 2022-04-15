function storeProvision(currentStocks, forDelivery) {
    let storeProducts = {};
    let currentStocksL = currentStocks.length;
    let currentDeliveryL = forDelivery.length;
    for (let i = 0; i < currentStocksL; i += 2) {
        let product = currentStocks[i];
        storeProducts[product] = Number(currentStocks[i + 1]);
        //console.log(storeProducts)
        //storeProducts.push()

    }
    for (let i = 0; i < currentDeliveryL; i += 2) {
        let product = forDelivery[i];
        if (!storeProducts.hasOwnProperty(product)) { // използва се за обекти, а includes  се използва за функции
            storeProducts[product] = 0;


        }
        storeProducts[product] += Number(forDelivery[i + 1]);

    }
    for (let product in storeProducts) {
        console.log(`${product} -> ${storeProducts[product]}`);
    }


}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]);

/*function solve(availableStock, deliveredSotck) {
    let storedProducts = {};
    for (let index = 0; index < availableStock.length; index += 2) {
        let currProduct = availableStock[index];
        storedProducts[currProduct] = Number(availableStock[index + 1]);
    }
    for (let index = 0; index < deliveredSotck.length; index += 2) {
        let currProduct = deliveredSotck[index];
        if (!storedProducts.hasOwnProperty(currProduct)) {
            storedProducts[currProduct] = 0;
        }
        storedProducts[currProduct] += Number(deliveredSotck[index + 1]);
    }
    for (let product in storedProducts) {
        console.log(`${product} -> ${storedProducts[product]}`);
    }
    //for (let product of Object.keys(storedProducts)) {
    //console.log(`${product} -> ${storedProducts[product]}`);
    //}
}

solve(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"], ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);*/