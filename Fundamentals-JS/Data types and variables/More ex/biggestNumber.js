/*function biggestNum(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log(n1);
    } else if (n2 > n1 && n2 > n3) {
        console.log(n2);
    } else {
        console.log(n3)
    }

}*/
function biggestNum(n1, n2, n3) {
    let maxNum = Math.max(n1, n2, n3);

    console.log(maxNum);
}
biggestNum(43, 43.2, 43.1)
    //(130, 5, 99); (-2, 7, 3);