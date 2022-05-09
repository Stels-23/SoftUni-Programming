function oscars(input) {
    let actorsName = input.shift()
    let scoreFromAcademia = Number(input.shift());
    let countJury = Number(input.shift());
    let scoreFromJury = 0;
    let isNominee = true;
    for (let i = 0; i < input.length; i += 2) {
        let name = input[i];
        let jurysNameLength = input[i].split('').length;
        let giveScore = Number(input[i + 1]);
        scoreFromAcademia += scoreFromJury + (jurysNameLength * (giveScore / 2));
        if (scoreFromAcademia > 1250.50) {
            break;
        }

    }
    if (scoreFromAcademia < 1250.50) {
        isNominee = false;
        let needScore = 1250.50 - scoreFromAcademia;
        console.log(`Sorry, ${actorsName} you need ${needScore.toFixed(1)} more!`);
    }
    if (isNominee) {
        console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${scoreFromAcademia.toFixed(1)}!`);
    }


}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"
]);
console.log('=================');
oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"
]);
console.log('=================');
oscars(["Benny B",
    "320.30",
    "13",
    "Kendra Who",
    "30.5",
    "William B",
    "10.3",
    "Francesko Aliano",
    "19.0",
    "Bibi B",
    "1",
    "The Game",
    "19",
    "Grey Worm",
    "50",
    "Homer Simpson",
    "12.5",
    "JErry Mouse",
    "23.0",
    "Vivian Tree",
    "40",
    "Stefanni Balucci",
    "23.33",
    "Becky D",
    "8",
    "Free People",
    "20.01",
    "Green Lane",
    "12.0"
])