function stringLength(str1, str2, str3) {
    let elementL1 = str1.length;
    let elementL2 = str2.length;
    let elementL3 = str3.length;
    let totalSum = elementL1 + elementL2 + elementL3;
    let average = Math.floor(totalSum / 3);
    console.log(`${totalSum}\n${average}`);

}
stringLength('chocolate', 'ice cream', 'cake');
console.log('============');
stringLength('pasta', '5', '22.3')