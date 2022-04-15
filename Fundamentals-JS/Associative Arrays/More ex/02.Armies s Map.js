function armies(arr) {

    let armies = new Map();

    for (let line of arr) {

        if (line.includes('arrives')) {
            line = line.split(' '); // tuka shte se prezapishe, za da moje posle da se otreje poslednata duma
            line.pop();
            let leader = line.shift();

            armies.set(leader, []);

        } else if (line.includes(':')) {
            line = line.split(': ');
            let leader = line.shift();
            let [armyName, armyCount] = line.shift().split(', ');
            armyCount = Number(armyCount);

            if (armies.has(leader)) {
                let currArmy = [armyName, armyCount];
                let existedLeader = armies.get(leader);
                existedLeader.push(currArmy);
            }
        } else if (line.includes('+')) {
            let [armyName, armyCount] = line.split(' + ');
            armyCount = Number(armyCount);

            for (let leader of armies.keys()) {
                let existedLeader = armies.get(leader);
                existedLeader.map(army => {
                    if (army[0] == armyName) {
                        army[1] += armyCount;
                    }
                });
            }
        } else if (line.includes('defeated')) {
            line = line.split(' ');
            line.pop();
            let leader = line.shift();

            if (armies.has(leader)) {
                armies.delete(leader);
            }
        }
    }

    let sortedLeaders = Array.from(armies.keys())
        .sort((a, b) => getArmiesTotalCount(armies.get(b)) - getArmiesTotalCount(armies.get(a)))
        .map(leader => {
            console.log(`${leader}: ${getArmiesTotalCount(armies.get(leader))}`);
            let sortedArmies = armies.get(leader)
                .sort((a, b) => b[1] - a[1])
                .map(army => console.log(`>>> ${army[0]} - ${army[1]}`));
        });

    function getArmiesTotalCount(leader) {
        let totalCount = 0;
        leader.map(army => totalCount += army[1]);
        return totalCount;
    }
}
armies(['Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);