function race(input) {
    let racers = input.shift().split(", ");
    let line = input.shift();
    let name = /[A-Za-z]/g;
    let KM = /\d/g;
    let objRacers = {};
    for (let currName of racers) {
        objRacers[currName] = 0;
    }

    while (line !== 'end of race') {
        let letters = line.match(name);
        let numbers = line.match(KM) // нямаме групи и затова не ползваме exec
        let currentName = letters.join('');
        let distances = numbers.map(Number);


        if (objRacers[currentName] !== undefined) {
            for (let x of distances) {
                objRacers[currentName] += x;
            }

        }
        line = input.shift();
    }
    let separate = Object.entries(objRacers)
        .sort((a, b) => b[1] - a[1]);
    //let count = 0;
    //separate = Object.keys(objRacers);
    //for (let [name, km] of separate) {
    //count++;
    //let first = separate[0].join("")
    //let second = separate[1]
    //let third = separate[2]
    if (separate[0]) { //(count === 1) {
        console.log(`1st place: ${separate[0][0]}`); //name

    }
    if (separate[1]) { //(count === 2) {
        console.log(`2nd place: ${separate[1][0]}`);


    }
    if (separate[2]) { //(count === 3) { //(count == 3) {
        console.log(`3rd place: ${separate[2][0]}`);

    }
    //}
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);
console.log('============');
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
]);