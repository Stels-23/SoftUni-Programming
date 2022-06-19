function storeCatalogue(array) {
    let catalogue = {};
    for (let line of array) {
        let tokens = line.split(' : ');
        let product = tokens[0];
        let price = Number(tokens[1]);
        let firstLetter = product[0] //.charAt(0);
        if (!catalogue.hasOwnProperty(firstLetter)) {
            catalogue[firstLetter] = {};
        }
        catalogue[firstLetter][product] = price


    }
    let products = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    for (let letter of products) {
        console.log(letter)
        let sortedProducts = Object.keys(catalogue[letter]).sort((a, b) => a.localeCompare(b));
        //let value = Object.values(catalogue[letter][products])
        for (let product of sortedProducts) {
            console.log(`  ${product}: ${catalogue[letter][product]}`);
        }


    }
}


storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
storeCatalogue(["Banana : 2",
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10"
])