function houseParty(param) {
    let guests = []

    for (command of param) {
        let name = command.split(" ")[0] // името визуализира
        if (command.includes("not")) {
            if (guests.includes(name)) {
                let index = guests.indexOf(name)
                guests.splice(index, 1)
            } else {
                console.log(`${name} is not in the list!`);
            }
        } else {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.push(name)
            }
        }
    }
    console.log(guests.join("\n"));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);
console.log('----------------------');
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);