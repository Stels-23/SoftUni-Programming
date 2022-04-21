function easterCompetition(input) {
    let countEasterBread = Number(input.shift());
    let player = input.shift();
    let totalPointsForEachPlayers = 0;
    let bestPoints = 0;
    let bestChef = '';
    while (countEasterBread > 0) {
        totalPointsForEachPlayers = 0;
        let chef = player;

        while (player !== "Stop") {
            player = Number(input.shift());
            if (isNaN(player) === false) {

                totalPointsForEachPlayers += player
            } else {
                player = input[0];
                player = input.shift();
                countEasterBread--;

                break;
            }

        }
        console.log(`${chef} has ${totalPointsForEachPlayers} points.`);
        if (totalPointsForEachPlayers > bestPoints) {
            bestPoints = totalPointsForEachPlayers;
            bestChef = chef;
            console.log(`${bestChef} is the new number 1!`);

        }
        continue;
    }
    console.log(`${bestChef} won competition with ${bestPoints} points!`)

}
easterCompetition(["3",
    "Chef Manchev", "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"
])
console.log('==================');
easterCompetition(["2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"
]);