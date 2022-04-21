function easterEggs(input) {
    let countEggs = Number(input.shift());
    let saveEggs = {}
    for (let i = 0; i < countEggs; i++) {
        let colorOfEgg = input[i];

        switch (colorOfEgg) {
            case "orange":
                if (saveEggs.hasOwnProperty(colorOfEgg)) {
                    saveEggs[colorOfEgg] += 1;
                } else {
                    saveEggs[colorOfEgg] = 1;
                }

                break;
            case "blue":
                if (saveEggs.hasOwnProperty(colorOfEgg)) {
                    saveEggs[colorOfEgg] += 1;
                } else {
                    saveEggs[colorOfEgg] = 1;
                }

                break;
            case "green":
                if (saveEggs.hasOwnProperty(colorOfEgg)) {
                    saveEggs[colorOfEgg] += 1;
                } else {
                    saveEggs[colorOfEgg] = 1;
                }

                break;
            case "red":
                saveEggs[colorOfEgg] = 1;
                console.log(`Red eggs: ${saveEggs[colorOfEgg]}`);
                delete saveEggs[colorOfEgg];

                break;
        }
    } //"red", "orange", "blue", "green"

    if (saveEggs.hasOwnProperty('orange') === false) {
        saveEggs['orange'] = 0;
    }
    if (saveEggs.hasOwnProperty('blue') === false) {
        saveEggs['blue'] = 0;
    }
    if (saveEggs.hasOwnProperty('green') === false) {
        saveEggs['green'] = 0;
    }
    let allColor = Object.keys(saveEggs)


    while (allColor.length > 0) {
        for (let [egg, count] of Object.entries(saveEggs)) {

            if (egg === 'orange' && allColor.includes('orange') === true) {
                console.log(`Orange eggs: ${count}`);
                let index1 = allColor.indexOf('orange')
                let remove = allColor.splice(index1, 1)
            }
            if (allColor.includes('orange') === false && egg === 'blue') {
                console.log(`Blue eggs: ${count}`);
                let index2 = allColor.indexOf('blue')
                let remove1 = allColor.splice(index2, 1)
            }
            if (allColor.includes('blue') === false && egg === 'green') {
                console.log(`Green eggs: ${count}`);
                let index3 = allColor.indexOf('green')
                let remove = allColor.splice(index3, 1)
                    // delete saveEggs[egg];
            }
        }
    }
    let sorted = Object.entries(saveEggs).sort((a, b) => b[1] - a[1]);
    console.log(`Max eggs: ${sorted[0][1]} -> ${sorted[0][0]}`)


}
easterEggs(["7",
    "orange",
    "blue",
    "green",
    "green",
    "blue",
    "red",
    "green"
]);
console.log('==============');
easterEggs(["4",
    "blue",
    "red",
    "blue",
    "orange"
])