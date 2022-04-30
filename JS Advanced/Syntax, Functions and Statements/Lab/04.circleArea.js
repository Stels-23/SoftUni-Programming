function circleArea(input) {
    let inputType = typeof(input);
    if (inputType === 'number') {
        let radius = input;
        let result = Math.PI * Math.pow(radius, 2);
        console.log(result.toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }

}
circleArea(5);
console.log('============');
circleArea('name');