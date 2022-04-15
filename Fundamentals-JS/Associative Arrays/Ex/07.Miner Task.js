function minerTask(input) {
    let mine = {};
    //let numbers = [];
    for (let i = 0; i < input.length; i += 2) { // da moje da vzima vsichki resursi
        if (!mine.hasOwnProperty(input[i])) {
            mine[input[i]] = 0;

        }
        mine[input[i]] += Number(input[i + 1])
    }
    return Object.entries(mine) // moje i da go nqma retrn
        .map(([k, v] = result) => console.log(`${k} -> ${v}`))
        .join('\n')
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
console.log("=========================");
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])