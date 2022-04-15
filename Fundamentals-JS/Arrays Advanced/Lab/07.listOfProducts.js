function listOfProducts(products) {
    let sorted = products.sort()
    let result = '';
    for (let i = 0; i < sorted.length; i++) {
        result += `${i+1}.${sorted[i]} \n`

    }
    console.log(result);
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
console.log("------------------------");
listOfProducts(['Watermelon', 'Banana', 'Apples']);