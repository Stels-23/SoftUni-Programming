function mathOperand(n1, n2, operand) {
    let result = 0;
    switch (operand) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        case '%':
            result = n1 % n2;
            break;
        case '**': // експонента, т.е конкретното число по колко пъти се умножава- 10 по 7 пъти;
            result = n1 ** n2;
    }
    console.log(result)

}
mathOperand(5, 6, '+');
console.log('================');
mathOperand(3, 5.5, '*')
console.log('==================');
mathOperand(10, 7, '**')