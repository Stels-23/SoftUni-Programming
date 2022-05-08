function movieDestination(input) {
    let bugetForMovie = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);
    let costDestinationForSeason = 0;
    switch (destination) {
        case "Sofia":
            let priceIncrease = 1.25;
            if (season === "Summer") {
                costDestinationForSeason += (12500 * days) * priceIncrease;


            } else {
                costDestinationForSeason += (17000 * days) * priceIncrease;
            }
            break;
        case "Dubai":
            let discount = 0.70;
            if (season === "Summer") {
                costDestinationForSeason += (40000 * days) * discount;
            } else {
                costDestinationForSeason += (45000 * days) * discount;
            }

            break;
        case "London":
            if (season === "Summer") {
                costDestinationForSeason += 20250 * days;
            } else {
                costDestinationForSeason += 24000 * days;
            }

            break;
    }
    if (costDestinationForSeason <= bugetForMovie) {
        let suficientAmount = bugetForMovie - costDestinationForSeason;
        console.log(`The budget for the movie is enough! We have ${suficientAmount.toFixed(2)} leva left!`);
    } else {
        let needAmount = costDestinationForSeason - bugetForMovie;
        console.log(`The director needs ${needAmount.toFixed(2)} leva more!`);
    }

}
movieDestination(["400000",
    "Sofia",
    "Winter",
    "20"
]);
console.log('=============');
movieDestination(["1000000",
    "Dubai",
    "Summer",
    "5"
]);
console.log('=============');
movieDestination(["200000",
    "London",
    "Summer",
    "7"
]);