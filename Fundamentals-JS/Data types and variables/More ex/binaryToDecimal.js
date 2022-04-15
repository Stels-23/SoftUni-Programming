// за бинарно превръщане на кода, трябва да се използва метода parseInt(input, 2)
function binary(input) {
    let convertToStr = String(input);
    let convertToBinary = Number.parseInt(convertToStr, 2);
    console.log(convertToBinary)


}
binary("00001001")
    /* function binaryToDecimal(input) {
        //let binary = input + "";
        let decimal = Number.parseInt(input, 2);
        console.log(decimal)
    }*/