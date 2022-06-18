function carFactory(wantedCar) {
    let engines = [{ power: 90, volume: 1800 }, { power: 120, volume: 2400 }, { power: 200, volume: 3500 }];
    let carriages = [{ type: 'hatchback', color: wantedCar.color }, { type: 'coupe', color: wantedCar.color }];

    let wheelsSize = wantedCar.wheelsize % 2 === 1 ? wantedCar.wheelsize : wantedCar.wheelsize - 1;
    //arrayWheels.push(wheelsSize);

    return {
        model: wantedCar.model,
        engine: engines.filter(e => e.power >= wantedCar.power)[0],
        carriage: carriages.filter(el => el.type == wantedCar.carriage)[0], // от масив да си вземем 1 обект
        wheels: Array(4).fill(wheelsSize) // [wheelsSize, wheelsSize, wheelsSize, wheelsSize]
    }

}
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));