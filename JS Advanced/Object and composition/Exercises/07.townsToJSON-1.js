function townsToJSON(array) {
    let result = []; //списък
    class Town {
        constructor(town, latitude, longtitude) {
            this.Town = town;
            this.Latitude = Number(latitude); // кастваме към число
            this.Longitude = Number(longtitude);
        }
    }
    for (let i = 1; i < array.length; i++) {
        let arr = array[i].split('|').map(t => t.trim()).filter(x => x.length != 0); // or x => x
        let currentTown = arr[0];
        let currentLatitude = Number(arr[1]).toFixed(2);
        let currentLongtitude = Number(arr[2]).toFixed(2);
        let town = new Town(currentTown, currentLongtitude, currentLatitude, currentLongtitude);
        result.push(town);

    }
    console.log(JSON.stringify(result));


}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
])