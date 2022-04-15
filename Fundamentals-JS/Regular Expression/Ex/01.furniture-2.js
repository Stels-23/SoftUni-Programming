function furniture(input) {
    let tempTotal = 0;
    let pattern = /\b(?<name>[A-Za-z]+)<<(?<price>\d+\.*\d*)\!(?<quantity>\d+)/g;
    console.log("Bought furniture:");

    for (let str of input) {
        let match = pattern.exec(str);
        while (match !== null) {
            let name = match.groups['name'];
            let price = Number(match.groups['price']);
            let quantity = Number(match.groups['quantity']);
            match = pattern.exec(str);
            console.log(`${name}`)
            tempTotal += (price * quantity);
            break;
        }
        //let newLine = str.shift()
    }
    console.log(`Total money spend: ${tempTotal.toFixed(2)}`)
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
])