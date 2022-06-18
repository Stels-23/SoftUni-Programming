/*function constructionCrew(obj) {
    let newObj = {};
    const requareAmountPerKG = 0.1;
    for (let [key, value] of Object.entries(obj)) {
        if (key === 'levelOfHydrated') {
            let level = 0;
            for (let [el1, el2] of Object.entries(obj)) {

                if (el1 === 'weight') {
                    level = el2 * requareAmountPerKG;
                } else if (el1 === 'experience') {
                    level *= el2;
                } else if (el1 === 'levelOfHydrated') {
                    level += el2;
                    if (Number.isInteger(level) === false) {
                        level = 0;
                    }
                }
                newObj[key] = level;
            }

        } else if (key === 'dizziness') {
            newObj[key] = false;
        } else {
            newObj[key] = value;
        }

    }
    return newObj

}*/
function constructionCrew(worker) {
    const requareAmountPerKG = 0.1;
    if (worker.dizziness) { // if human is hydrated
        worker.levelOfHydrated += requareAmountPerKG * worker.weight * worker.experience;
        worker.dizziness = false;
    }
    console.log(worker);
}
constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});
constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
});
constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
})