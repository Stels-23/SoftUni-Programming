function cardGame(array) {
    let players = {};
    let deckOfCards = {
        'A': 14,
        'K': 13,
        'Q': 12,
        'J': 11,
        '1': 10,
        '9': 9,
        '8': 8,
        '7': 7,
        '6': 6,
        '5': 5,
        '4': 4,
        '3': 3,
        '2': 2,
    };
    let suits = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4,
    }
    for (let line of array) {
        let [person, cards] = line.split(": ")
        cards = cards.split(", ")
            //console.log(person);
            //console.log(card)
        if (players.hasOwnProperty(person) === false) {
            players[person] = new Set(); //само неповтарящи се карти се сетват
        }
        for (let card of cards) {
            players[person].add(card)
        }


    }
    for (let [person, cards] of Object.entries(players)) {
        let power = 0;
        for (let card of cards) {
            let deckOfPower = deckOfCards[card[0]];
            let suitPower = suits[card.slice(-1)] //suits[card[card.length - 1]]; взима последния символ
            power += deckOfPower * suitPower;
        }
        console.log(`${person}: ${power}`);
    }

}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
console.log("===================");
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD',
    'John: JD, JD, JD, JD'
]);