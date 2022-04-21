function easterEggsBattle(input) {
    let player1 = Number(input.shift());
    let player2 = Number(input.shift());
    let line = input.shift();
    while (line !== "End") {
        if (line === "one") {
            player2 -= 1;
        } else if (line === "two") {
            player1 -= 1;
        }
        if (player1 === 0) {
            console.log(`Player one is out of eggs. Player two has ${player2} eggs left.`);
            break;
        }
        if (player2 === 0) {
            console.log(`Player two is out of eggs. Player one has ${player1} eggs left.`);
            break;
        }
        line = input.shift();
    }
    if (player1 > 0 && player2 > 0) {
        console.log(`Player one has ${player1} eggs left.`);
        console.log(`Player two has ${player2} eggs left.`);

    }
}
easterEggsBattle(["5",
    "4",
    "one",
    "two",
    "one",
    "two",
    "two",
    "End"
]);
console.log('============');
easterEggsBattle(["2",
    "6",
    "one",
    "two",
    "two"
]);
console.log('==================');
easterEggsBattle(["6",
    "3",
    "one",
    "two",
    "two",
    "one",
    "one"
])