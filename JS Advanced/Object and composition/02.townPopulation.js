function townPopulation(input) {
    let result = {};
    for (let line of input) {
        let [town, population] = line.split(' <-> ');
        if (result.hasOwnProperty(town) === true) {

            result[town] += Number(population);

        } else {
            result[town] = Number(population);
        }
    }
    /*let keyAndValue = `${result.town} : ${result.population}`
    console.log(keyAndValue);*/


    for (let [key, value] of Object.entries(result)) {
        console.log(`${key} : ${value}`)

    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
console.log('==========');
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
])