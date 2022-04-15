function garage(input) {
    let garages = new Map();

    for (let line of input) {
        let [garage, carValues] = line.split(' - ') //.shift();
        if (!garages.has(garage)) {
            garages.set(garage, [carValues]);
        } else {
            let availableCars = garages.get(garage); //zaazva go v masiv
            availableCars.push(carValues);
            garages.set(garage, availableCars);
        }

    }
    let sortedGarages = [...garages.entries()].sort((a, b) => a[0] - b[0]);
    let output = '';
    for (let [currGarage, currValue] of sortedGarages) {
        output += `Garage № ${currGarage}\n`;
        for (let currCarProperties of currValue) {
            currCarProperties = currCarProperties.replace(/: /g, ' - ');
            output += `--- ${currCarProperties}\n`;
        }
    }
    console.log(output);
}
garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
])