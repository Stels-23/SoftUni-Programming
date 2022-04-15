/*function storage(input) {
    let storage = {};
    for (let line of input) {
        let separateLine = line.split(" ");
        let product = separateLine[0];
        let quantity = Number(separateLine[1]);
        if (storage.hasOwnProperty(product)) {
            storage[product] += Number(quantity);

        } else {
            storage[product] = quantity;
        }
    }
    for (let key in storage) {
        console.log(key, "->", storage[key]);

    }

}*/
function storage(input) {
    let storage = new Map();
    for (let line of input) {
        let tokens = line.split(" ");
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if (storage.has(product)) {
            let currQ = storage.get(product);
            currQ += quantity;
            storage.set(product, currQ)

        } else {
            storage.set(product, quantity)
        }

    }
    for (let [key, value] of storage) {

        console.log(key, "->", value)

    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);
console.log("===============");
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
]);