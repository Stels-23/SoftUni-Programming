function inventory(input) {
    let heroes = [];
    for (let heroInfo of input) {
        let [name, level, items] = heroInfo.split(" / ");
        items.split(", ")
            .sort((a, b) => a.localeCompare(b))
            .join(", ");
        let hero = {
            name: name,
            level: +level, // все едно Number
            items: items

        };
        heroes.push(hero);

    }
    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);
    /*sortedHeroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);*/
    //});
    for (let hero of sortedHeroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);

    }


}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
console.log("===============")
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);