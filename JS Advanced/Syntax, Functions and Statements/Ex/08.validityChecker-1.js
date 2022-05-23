function solve(n1, n2, n3, n4) {
    let x1 = n1;
    let y1 = n2;

    let x2 = n3;
    let y2 = n4;
    result(x1, y1, 0, 0);
    result(x2, y2, 0, 0);
    result(x1, y1, x2, y2);
function result(x1, y1, x2, y2) {
        let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        let validString = Number.isInteger(distance) ? 'valid' : 'invalid';
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validString}`)
    }
}
solve(3, 0, 0, 4);
console.log('====');
solve(2, 1, 1, 1)
