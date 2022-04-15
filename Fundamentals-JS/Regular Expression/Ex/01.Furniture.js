function furnitures(input) {
    let pattern = new RegExp(">>(?<name>[\\w]+)<<(?<price>[\\d]+[.]?[\\d]+)!(?<qty>[\\d]+)"); // />>(?<name>[A-Za-z]+)<<(?<price>\d+[?:.\d]\d+)!(?<qty>\d+)/;
    let furniture = [];
    let total = 0;
    let money = 0;
    let quantity = 0;
    let line = input.shift();
    while (line !== "Purchase") {
        let match = pattern.exec(line)
        if (match !== null) {
            furniture.push(match.groups['name'])
            money = Number(match.groups['price']);
            quantity = Number(match.groups['qty']);
            total += money * quantity;

        }
        line = input.shift();
    }
    console.log('Bought furniture:');
    if (furniture.length > 0) { // при граничен случай, ако е празен масива
        // for (let line of furniture) {
        console.log(furniture.join('\n'))
            //}
    }

    console.log(`Total money spend: ${total.toFixed(2)}`)
}
furnitures(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);
console.log('================');
furnitures(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
]);
console.log('==================');
furnitures(['>Invalid<<!4',
    '>Invalid<<!2',
    '>Invalid<<!5',
    'Purchase'
])