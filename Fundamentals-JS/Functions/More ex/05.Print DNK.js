function printDNA(number) {
    let arr = 'ATCGTTAGGG'.split('');
    //console.log(arr)
    for (let i = 1; i <= number; i++) {
        let [a, b] = arr.splice(0, 2);
        let result = [a, b];
        if (i === 1 || i % 4 === 1) {
            console.log(`**${a}${b}**`)
        } else if (i === 2 || i % 4 === 2) {
            console.log(`*${a}--${b}*`);
        } else if (i === 3 || i % 4 === 3) {
            console.log(`${a}----${b}`);
        } else if (i === 4 || i % 4 === 0) {
            console.log(`*${a}--${b}*`);
        }
        arr.push(a);
        arr.push(b);
    }
    // ATCGTTAGGG
}
printDNA(4);
console.log('----------------');
printDNA(10)