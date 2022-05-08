function seriesCalculator(input) {
    let nameOfMovie = input[0];
    let countSeasons = Number(input[1]);
    let countEpisodes = Number(input[2]);
    let advertisingOnEachEpisode = 0.20;
    let OVA = 10;
    let timeEpisodeWithoutAdvertising = Number(input[3]);
    let continueAdvertising = timeEpisodeWithoutAdvertising * advertisingOnEachEpisode;
    let continueOnEpisodeWithAdvertising = timeEpisodeWithoutAdvertising + continueAdvertising;
    let extraTimeForSpecialEpisodes = countSeasons * OVA;
    let totalTimeForWatch = Math.floor(continueOnEpisodeWithAdvertising * countEpisodes * countSeasons + extraTimeForSpecialEpisodes);

    console.log(`Total time needed to watch the ${nameOfMovie} series is ${totalTimeForWatch} minutes.`)

}
seriesCalculator(["Lucifer",
    "3",
    "18",
    "55"
])
console.log('=========')
seriesCalculator(["Game of Thrones",
    "7",
    "10",
    "50"
])
console.log('==========')
seriesCalculator(["Riverdale",
    "3",
    "21",
    "45"
])