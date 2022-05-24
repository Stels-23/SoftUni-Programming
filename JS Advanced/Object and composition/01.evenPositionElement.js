function positionElement(input) {
    let array = [];
    for (let element = 0; element < input.length; element += 2) {


        array.push(input[element]);

    }
    console.log(array.join(' '));

}
positionElement(['20', '30', '40', '50', '60']);
positionElement(['5', '10']);