function softuniBarIncome(input) {
    //let client = /\%(?<client>[A-Z][a-z]*)\%/;
    //let product = /\<(?<product>\w+)\>/;
    //let count = /\|(?<count>\d+)\|/;
    //let price = /(?<price>\d+(?:\.\d+)*)\$/;
    let totalSum = 0;
    let digits = 0;
    let inputInRegex = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/
    while (input[0] != 'end of shift') {
        let line = input.shift();
        let match = inputInRegex.exec(line);
        if (match !== null) {
            let [_, name, product, qty, price] = match; // можем да слагаме и символ _ при конкретен индекс, ако не ни е необходим!!! 
            qty = Number(qty);
            price = Number(price)
            totalSum = qty * price;
            digits += qty * price;
            console.log(`${name}: ${product} - ${totalSum.toFixed(2)}`);

            //console.log(_)
            //console.log(name);
            //console.log(product);
            //console.log(qty);
            //console.log(price)
        }


    }
    console.log(`Total income: ${digits.toFixed(2)}`)
}
softuniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);
console.log('===============');
softuniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);