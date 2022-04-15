function distance(input1, input2, input3, input4) {
    let x1 = Number(input1);
    let y1 = Number(input2);
    let x2 = Number(input3);
    let y2 = Number(input4);

    let minusx = x2 - x1;
    let minusy = y1 - y2;
    let xPower = Math.pow(minusx, 2);
    let yPower = Math.pow(minusy, 2);
    let collected = xPower + yPower;
    let squareRoot = Math.sqrt(collected);
    console.log(squareRoot);

}
distance(2.34, 15.66, -13.55, -2.9985) //(2, 4, 5, 0)