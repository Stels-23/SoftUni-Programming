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
