function townPopulation(input) {
    let result = {};
    for (let line of input) {
        let tokens = line.split(' <-> ');
        let town = tokens[0];
        let population = Number(tokens[1]);
        if (result[town] !== undefined) {
            population += result[town];
        }
        result[town] = population;

    }

    for (let town in result) {
        console.log(`${town} : ${result[town]}`)

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
]);
