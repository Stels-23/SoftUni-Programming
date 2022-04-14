function getNumbers(base, increment) {
    let marableSum = 0;
    let lapis = 0;
    let gold = 0;
    if (base && increment > 0) {
        let totalStone = 0;
        let counter = 1;
        for (let i = base; i >= 1; i -= 2) {
            if (base > 2) {
                if (counter % 5 === 0) { //Външният слой на всяка 5 та стъпка
                    lapis += (base * 4 - 4) * increment;
                } else {
                    marableSum += (base * 4 - 4) * increment;
                }
                counter++;
                totalStone += (base - 2) * (base - 2) * increment;
            } else {
                gold += (base * base) * increment
            }
            base -= 2;
        }
        console.log(`Stone required: ${Math.ceil(totalStone)}`);
        console.log(`Marble required: ${Math.ceil(marableSum)}`);
        console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
        console.log(`Gold required: ${Math.ceil(gold)}`);
        console.log(`Final pyramid height: ${Math.floor(counter * increment)}`);
    }
}
getNumbers(11, 1)
    /*Total stone is 81*0.75+49*0.75+25*0.75+9*0.75+1*0.75 = 123.75, we round up to 124.
    Total marble is 40*0.75+32*0.75+24*0.75+16*0.75=84.
    Total lapis lazuli is 8*0.75=6.
    Total gold is 1*0.75=0.75, we round up to 1.
    Total height is 4.5 (6 steps times 0.75), we round down to 4.*/