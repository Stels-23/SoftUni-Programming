/*function calc(n1, op, n2) {
    let result = 0;
    switch (op) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "*":
            result = n1 * n2;
            break;
        case "/":
            result = n1 / n2;
            break;
    }
    console.log(result.toFixed(2));

}*/
function calc(n1, op, n2) {
    let result = 0;
    if (op == "+") {
        result = n1 + n2;
    } else if (op == "-") {
        result = n1 - n2;
    } else if (op == "*") {
        result = n1 * n2;
    } else {
        result = n1 / n2;
    }
    console.log(result.toFixed(2));
}
calc(25.5, '/', 3) //(5, '+', 10);