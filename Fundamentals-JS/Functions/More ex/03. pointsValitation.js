function pointsValitation(arr) {
    let x1 = arr[0]; //x1 = 3
    let y1 = arr[1]; //y2 = 0
    let x2 = arr[2]; //x2 = 0
    let y2 = arr[3]; //y2 = 4

    let firstN = firstPoint(arr);
    let secondN = secondPoint(arr);
    let thirdN = thirdPoint(arr);

    if (firstN === Math.trunc(firstN)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`); //{3, 0} to {0, 0} is valid
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    if (secondN === Math.trunc(secondN)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`); //{0, 4} to {0, 0} is valid
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (thirdN === Math.trunc(thirdN)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`); //{3, 0} to {0, 4} is valid
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }



    function firstPoint() {
        let checkFirst = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
        return checkFirst;
    }

    function secondPoint() {
        let checkSecond = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
        //
        return checkSecond;
    }

    function thirdPoint() {
        let checkThrird = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
        return checkThrird;
    }
}

pointsValitation([3, 0, 0, 4]);
console.log('-------------------');
pointsValitation([2, 1, 1, 1]);