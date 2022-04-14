function rounding(num, precise) {
    num = Number(num);
    precise = Number(precise);
    if (precise > 15) { // зададено си е числото след 10-тичния знак да е с с големина до 15 числа
        precise = 15;
    }
    num = num.toFixed(precise); //числото 3.14 е форматирано до зададеното число в инпута, т.е. 2
    console.log(parseFloat(num))

}
rounding(3.1415926535897932384626433832795, 2)