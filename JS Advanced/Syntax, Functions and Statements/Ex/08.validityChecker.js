function solve(n1, n2, n3, n4) {
    let x1 = n1;
    let y1 = n2;
    let x2 = n3;
    let y2 = n4;

    function distance(x1, y1, x2, y2) {
        let distH = x1 - x2;
        let distY = y1 - y2;
        return Math.sqrt(distH ** 2 + distY ** 2);
    }

    if (Number.isInteger(distance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
solve(3, 0, 0, 4);
console.log('====');
solve(2, 1, 1, 1)