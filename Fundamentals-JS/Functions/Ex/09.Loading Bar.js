function loadingBar(number) {

    let percent = '%'.repeat(number / 10);
    let dots = '.'.repeat(10 - number / 10);

    if (number === 100) {

        console.log(`${number}% complete!`);
        console.log(`[${percent}]`);
    } else {
        let result = `${percent}${dots}`
        console.log(`${number}% [${result}]`);
        console.log('Still loading...')
    }


}
loadingBar(30);
console.log('----------------');
loadingBar(50);
console.log('-----------------')
loadingBar(100);

/*function loadingBar(number) {
    let procentages = '%'.repeat(number / 10);
    let dots = '.'.repeat(10 - number / 10);
    if (number === 100) {
        console.log(`${number}% Complete!`);
        console.log(`[${procentages}]`);
    } else {
        console.log(`${number}% [${procentages}${dots}]`);
        console.log(`Still loading...`);
    }
} */