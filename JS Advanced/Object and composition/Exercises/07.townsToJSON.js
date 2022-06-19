function townsToJSON(array) {
    let result = [];
    for (let i = 1; i < array.length; i++) {
        let tokens = array[i].split(/['|']\s*/g);
        let removeSpace1 = tokens.shift();
        let removeSpace2 = tokens.pop();
        let Town = tokens[0].trim();
        let Latitude = Number(tokens[1].trim());
        let Longitude = Number(tokens[2].trim());
        Latitude = Number(Latitude.toFixed(2));
        Longitude = Number(Longitude.toFixed(2))
        result.push({ Town, Latitude, Longitude });


    }

    console.log(JSON.stringify(result));
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])
townsToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
])