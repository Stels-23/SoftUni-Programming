function movieStars(input) {
    let buget = Number(input[0]);
    let index = 1;
    let actor = input[index];
    let addPercent = 0.20;
    let remuneration = '';
    while (actor !== 'ACTION') {
        index++;
        remuneration = input[index];
        let lengthNameOfActor = actor.split('').length;
        if (lengthNameOfActor > 15) {
            addPercent = buget * 0.20;
            buget -= addPercent;
            actor = remuneration;
            continue;
        }
        if (isNaN(Number(remuneration)) === false) {
            remuneration = Number(input[index]);
            if (buget > remuneration) {
                buget -= remuneration;

            } else {
                break;
            }
        }
        index++;
        actor = input[index];
    }
    if (remuneration === 'ACTION' || actor === "ACTION") {
        console.log(`We are left with ${buget.toFixed(2)} leva.`)
    } else {
        let needMoney = Math.abs(buget - remuneration);
        console.log(`We need ${needMoney.toFixed(2)} leva for our actors.`);

    }
}
movieStars(['2000000.5',
    'Jet Lee',
    '1000000',
    'Jackie Chan',
    '1000000',
    'ACTION'
])
console.log('===========')
movieStars(['2100000',
    'Homer Simpson',
    '1000000',
    'Tsvetomir Ivanovich',
    'ACTION'
]);
console.log('============')
movieStars(["2100000",
    "Frederic Gustafsson I",
    "Frederic Gustafsson II",
    "Frederic Gustafsson III",
    "Frederic Gustafsson IV",
    "Frederic Gustafsson V",
    "Frederic Gustafsson VI",
    "Frederic Gustafsson VII",
    "Frederic Gustafsson VIII",
    "Frederic Gustafsson IX",
    "Frederic Gustafsson X",
    "Frederic Gustafsson XI",
    "Frederic Gustafsson XII",
    "Frederic Gustafsson XIII",
    "Frederic Gustafsson XIV",
    "Frederic Gustafsson XV",
    "Frederic Gustafsson XVI",
    "Frederic Gustafsson XVII",
    "Frederic Gustafsson XVIII",
    "Frederic Gustafsson XIX",
    "Frederic Gustafsson XX",
    "ACTION"
]);
console.log('===========')
movieStars(["90000",
    "Christian Bale",
    "70000.50",
    "Leonard DiCaprio",
    "Kevin Spacey",
    "24000.99"
]);
console.log('============');
movieStars(["170000",
    "Ben Affleck",
    "40000.50",
    "Zahari Baharov",
    "80000",
    "Tom Hanks",
    "2000.99",
    "ACTION"
]);
