function inventory(input) {
    let heroes = [];
    for (let currentHero of input) {
        let info = currentHero.split(' / ');
        let heroName = info[0];
        let level = info[1];
        let items = info[2].split(', ')
            .join(', ');
        let infoHero = {
            heroName,
            level,
            items
        };
        heroes.push(infoHero);
    }
    heroes.sort((a, b) => a.level - b.level);
    for (let hero of heroes) {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
console.log('==============');
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
])