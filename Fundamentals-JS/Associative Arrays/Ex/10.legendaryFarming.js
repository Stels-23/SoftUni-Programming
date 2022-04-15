function legendaryFarming(input) {
    let obj = {};
    let specialItems = {
        motes: 0,
        shards: 0,
        fragments: 0,
    };
    let separate = input.split(" ")
    for (let element = 0; element < separate.length; element += 2) {
        let value = Number(separate[element]);
        let name = separate[element + 1];
        if (name.toLocaleLowerCase() === "motes" ||
            name.toLocaleLowerCase() === "fragments" ||
            name.toLocaleLowerCase() === "shards") {
            specialItems[name.toLocaleLowerCase()] += value;

        } else {
            if (obj.hasOwnProperty(name.toLocaleLowerCase()) === false) {
                obj[name.toLocaleLowerCase()] = 0;

            }
            obj[name.toLocaleLowerCase()] += value;


        }
        if (specialItems.motes >= 250) {
            cosnole.log("DragonWarth obtained!");
            specialItems.motes -= 250;
            break;

        }
        if (specialItems.shards >= 250) {
            console.log("Shadowmourne obtained");
            specialItems.shards -= 250;
            break;
        }
        if (specialItems.fragments >= 250) {
            console.log("Valanyr obtained!");
            specialItems.fragments -= 250;
            break;
        }
    }
    let junkStored = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
    let specialStored = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    if (specialStored[0][1] === specialStored[1][1]) {
        if (specialStored[0][0].localeCompare(specialStored[1][0] > 0)) {
            let w = specialStored[0];
            specialStored[0] = specialStored[1];
            specialStored[1] = w;
        }
    }
    if (specialStored[0][1] === specialStored[2][1]) {
        if (specialStored[0][0].localeCompare(specialStored[2][0]) > 0) {

            let w = specialStored[0];
            specialStored[0] = specialStored[2];
            specialStored[2] = w;
        }
    }
    if (specialStored[1][1] === specialStored[2][1]) {
        if (specialStored[0][0].localeCompare(specialStored[2][0]) > 0) {
            let w = specialStored[1];
            specialStored[1] = specialStored[2];
            specialStored[2] = w;
        }

    }
    for (let [name, value] of specialStored) {
        console.log(`${name}:${value}`);
    }
    for (let [name, value] of junkStored) {
        console.log(`${name}:${value}`);
    }
}


legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');