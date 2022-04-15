function arenaTier(input) {

    let result = {}

    for (let element of input) {
        if (element === 'Ave Cesar') {
            break
        } else if (element.includes(' vs ')) {
            let [gladiator1, gladiator2] = element.split(' vs ')
            if (result.hasOwnProperty(gladiator1) && result.hasOwnProperty(gladiator2)) {

                for (let el1 of Object.entries(result[gladiator1])) {
                    for (let el2 of Object.entries(result[gladiator2])) {

                        if (el1[0] === el2[0]) {
                            if (el1[1] > el2[1]) {
                                delete result[gladiator2]
                                    //console.log(result);
                            } else if (el2[1] > el1[1]) {
                                delete result[gladiator1]
                            }

                        }
                    }
                }

            }

        } else {
            let [name, skils, power] = element.split(' -> ')
            power = Number(power)
            if (result.hasOwnProperty(name) === false) {
                result[name] = {}
            }
            if (result[name].hasOwnProperty(skils) === false) {
                result[name][skils] = power
            } else {
                let oldPower = result[name][skils]
                if (power > oldPower) {
                    result[name][skils] = power
                }
            }
        }
    }
    let sorted = Object.entries(result)
    let newArr = []
        //sorted.sort((a,b)=>a[0]-b[0])
    for (let line of sorted) {
        let name = line[0]
        let str = Object.entries(line[1])
        let sum = str.map(a => a[1]).reduce((a, b) => a + b)
        newArr.push([name, str, sum])

    }
    newArr.sort((a, b) => b[2] - a[2]) //|| a[0].localeCompare(b[0]))
    for (let token of newArr) {
        console.log(`${token[0]}: ${token[2]} skill`);

        token[1]
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .map(x => console.log(`- ${x[0]} <!> ${x[1]}`))
    }
}
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])