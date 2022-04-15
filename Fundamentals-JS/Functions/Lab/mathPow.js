/*function mathPow(n, pow) {
    let number = Math.pow(n, pow);
    console.log(number)
}*/
function mathPow(n, pow) {
    let num = 1;
    for (let i = 1; i <= pow; i++) {
        num *= n;
    }
    console.log(num)
}
mathPow(2, 8);
mathPow(3, 4);