/*function signCheck(a, b, c) {
    let n1 = a;
    let n2 = b;
    let n3 = c;

    //let result = n1 + n2 + n3;

    let result = n1 / n2 / n3;
    if (result >= 0) {
        console.log("Positive"); //	If the result is positive, print on the console
    } else {
        console.log("Negative"); //Otherwise, print 
    }
}*/
function signCheck(a, b, c) {
    let sumary = a / b / c;
    let findElement = Math.sign(sumary);

    if (findElement >= 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);