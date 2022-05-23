function roadRadar(speed, area) {
    let result = '';
    let speedLimit = 0; //сетваме на 0, но иначе тази променлива е равна на area
    let difference = 0; //скоростта, с която се движим и максимално допустимата скорост
    let status = ''; // тази променлива зависи от differnce
    //if-else || switch
    switch (area) {
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
        case 'interstate':
            speedLimit = 90
            break;
        case 'motorway':
            speedLimit = 130;
            break;

    }
    if (speed <= speedLimit && speed > 0) {
        //console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
    } else {
        difference = speed - speedLimit;
        //console.log(`The speed is ${differnce} km/h faster than the allowed speed of ${speedLimit} - speeding`);
        result = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - `;
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference > 20 && difference <= 40) {
            status = 'excessive speeding';
        } else if (difference > 40) {
            status = 'reckless driving';
        }
    }
    console.log(result + status);



}
roadRadar(40, 'city');
console.log('===========');
roadRadar(21, 'residential');
console.log('===========');
roadRadar(120, 'interstate');
console.log('===========');
roadRadar(200, 'motorway');